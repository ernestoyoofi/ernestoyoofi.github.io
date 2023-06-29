
import Image from "next/image"
import syl from "~/layout/banner.module.css"

export default function Layout_Banner({ sources = {}, aboutPic, components = <></> }) {
  return (
    <div className={syl.banner}>
      <img src={sources.src} className={syl.image} loading="lazy"/>
      <div className={syl.titles}>
        <div className={syl.about_pict}>
          <div className={syl.about_pict_details}>
            <b>Device</b>
            <ul>
              <li>Brand: {aboutPic.device.brand}</li>
              <li>Model: {aboutPic.device.model}</li>
              <li>Focal: {aboutPic.device.focal}</li>
              <li>Exposure: {aboutPic.device.exposure}</li>
            </ul>
            <b>Location</b>
            <ul>
              <li>Geo: <a target="_blank" href={`https://www.google.com/maps/place/${aboutPic.location.geo}/${aboutPic.location.geo},71m?entry=ttu`} title="Click to open new window with google maps">{aboutPic.location.geo}</a></li>
              <li>Address: {aboutPic.location.sign}</li>
            </ul>
          </div>
          <small>{aboutPic.descrip}</small>
        </div>
        {components}
      </div>
    </div>
  )
}