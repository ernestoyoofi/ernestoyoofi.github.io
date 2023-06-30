import syl from "~/layout/homelist.module.css"
import NextRouter from "next/router"
import { GoCalendar } from "react-icons/go"

export default function Layout_HomeList({ data }) {
  const openToLoc = (slug) => {
    NextRouter.push(`/article/${slug}`,null,{shallow:true})
  }
  const openToCatagory = (slug) => {
    NextRouter.push(`/article-catagory/${slug}`,null,{shallow:true})
  }
  return (
    <div className={syl.list_article}>
      <h3>Artikel / Tulisan</h3>
      {data.map((res, key_data) => (
        <div className={syl.article_card} key={`article-view-${key_data}`}>
          <div className={syl.article_image}>
            <img src={res.image || "/untitle.png"} width="100%"/>
          </div>
          <div className={syl.article_info}>
            <h3 onClick={() => openToLoc(res.slug)}>{res.title}</h3>
            <p onClick={() => openToLoc(res.slug)}>{res.desc}</p>
            <small>
              <span comps="recount-time"><GoCalendar comps="recount-icon"/> {new Date(res.time).toString().split(" GMT")[0]}</span>
              {res.category.map((z, a) => (
                <span onClick={() => openToCatagory(z)} comps="recount" key={`catagory-types-${a}-${key_data}`}>{z}</span>
              ))}
            </small>
          </div>
        </div>
      ))}
      <div className={syl.button_more}>
        <button className={syl.more_view_article} onClick={() => {
          NextRouter.push("/article",null,{shallow:true})
        }}>Lihat Lebih Banyak</button>
      </div>
    </div>
  )
}