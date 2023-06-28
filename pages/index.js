import Layout_Banner from "~/layout/banner"
import Layout_HomeList from "~/layout/homelist"
import bannerImage from "~/public/banner.jpg"
import bannerImageAbout from "~/public/banner.json"

const ComponentsBanner = () => {
  return (
    <div className="flexcenter-width0-height0" style={{color:"#ffffff"}}>
      <div style={{padding:"0px 20px"}}>
        <h2>Selamat datang di halaman artikelku !</h2>
        <p>Disini hanya berisi artikel seperti tutorial, keseharian atau kehidupan</p>
      </div>
    </div>
  )
}

const sampledata = [
  {
    title: "",
    image: "",
    desc: "",
    slug: "",
    time: "",
    catagory: [""]
  }
]

export default function Home_UI() {
  return (
    <>
      <Layout_Banner
        sources={bannerImage}
        aboutPic={bannerImageAbout}
        components={<ComponentsBanner />}
      />
      <div className="response">
        <Layout_HomeList data={sampledata}/>
      </div>
    </>
  )
}