import syl from "~/layout/appluse.module.css"
import axios from "axios"
import { useEffect, useState } from "react"

const IconSvg = () => {
  return <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="hands-clapping" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M336 16V80c0 8.8-7.2 16-16 16s-16-7.2-16-16V16c0-8.8 7.2-16 16-16s16 7.2 16 16zm-98.7 7.1l32 48c4.9 7.4 2.9 17.3-4.4 22.2s-17.3 2.9-22.2-4.4l-32-48c-4.9-7.4-2.9-17.3 4.4-22.2s17.3-2.9 22.2 4.4zM135 119c9.4-9.4 24.6-9.4 33.9 0L292.7 242.7c10.1 10.1 27.3 2.9 27.3-11.3V192c0-17.7 14.3-32 32-32s32 14.3 32 32V345.6c0 57.1-30 110-78.9 139.4c-64 38.4-145.8 28.3-198.5-24.4L7 361c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l53 53c6.1 6.1 16 6.1 22.1 0s6.1-16 0-22.1L23 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l93 93c6.1 6.1 16 6.1 22.1 0s6.1-16 0-22.1L55 185c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l117 117c6.1 6.1 16 6.1 22.1 0s6.1-16 0-22.1l-93-93c-9.4-9.4-9.4-24.6 0-33.9zM433.1 484.9c-24.2 14.5-50.9 22.1-77.7 23.1c48.1-39.6 76.6-99 76.6-162.4l0-98.1c8.2-.1 16-6.4 16-16V192c0-17.7 14.3-32 32-32s32 14.3 32 32V345.6c0 57.1-30 110-78.9 139.4zM424.9 18.7c7.4 4.9 9.3 14.8 4.4 22.2l-32 48c-4.9 7.4-14.8 9.3-22.2 4.4s-9.3-14.8-4.4-22.2l32-48c4.9-7.4 14.8-9.3 22.2-4.4z"></path></svg>
}

const limitClickClap = 10

export default function Layout_Appluse({ id }) {
  const [applusedata, setapplusedata] = useState({load:true,limit:false,notfound:false,status:""})
  useEffect(() => {
    if(!applusedata.load) return ;
    const ls = localStorage.getItem("limit-clap")? JSON.parse(localStorage.getItem("limit-clap")) : {clickClap:0,timeout: new Date().getTime()}
    axios.get(`/api/appluse-post?slug=${id}`)
    .then(z => {
      setapplusedata({
        load:false,
        notfound:false,
        status:"",
        limit:ls?.clickClap>limitClickClap||false,
        ...z.data
      })
    })
    .catch(er => {
      setapplusedata({
        load:false,
        notfound:true,
        status:"",
        limit:ls?.clickClap>limitClickClap||false,
      })
    })
  })

  const setNewAppluse = () => {
    if(applusedata.load) return ;
    if(applusedata.notfound) return ;
    let ls = localStorage.getItem("limit-clap")? JSON.parse(localStorage.getItem("limit-clap")) : {clickClap:0,timeout: new Date().getTime()}
    if(ls?.clickClap > limitClickClap && ls?.timeout > new Date().getTime()) {
      setapplusedata({...applusedata,status:"over"})
      return ;
    }
    if(ls?.clickClap > limitClickClap && ls?.timeout < new Date().getTime()) {
      console.log("Reset...")
      ls["clickClap"] = 0
      localStorage.setItem("limit-clap", JSON.stringify({
        clickClap: 0,
        timeout: new Date().getTime()
      }))
    }
    axios.put(`/api/appluse-post?slug=${id}`).then(z => {
      // If Audio Success
      let virtual = document.createElement("audio")
      virtual.src = "/clap-sound.mp3"
      virtual.play()
      // Set Appluse
      setapplusedata({...applusedata,clap: z.data.clap,status:"goodjob"})
      // Set Outing Time
      localStorage.setItem("limit-clap", JSON.stringify({
        clickClap: ls?.clickClap+1,
        timeout: new Date().getTime() + (1000*60*10)
      }))
    }).catch(er => {
      setapplusedata({
        load:false,
        notfound:true,
        status:"",
        limit:true,
      })
    })
  }

  return (
    <>
      <div className={syl.box_appluse}>
        <button className={syl.button_appluse} onClick={()=>setNewAppluse()}>
          <div className={syl.icon_appluse}>
            <IconSvg />
          </div>
        </button>
        <div className={syl.text_appluse}>
          <p style={{margin:0,padding:0}}><b>{(applusedata.clap || 0).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")} orang</b> telah memberi tepuk tangan</p>
          <small>{applusedata.status === "goodjob"?"Bagus, termakasih ya !":applusedata.status === "over"?"Ups, udah dong, tunggu 10 menit lagi ya !":"Beri tepuk tanganmu !"}</small>
        </div>
      </div>
    </>
  )
}