import syl from "~/layout/homelist.module.css"
import NextRouter from "next/router"

export default function Layout_HomeList({ data }) {
  console.log(data)
  return (
    <div className={syl.list_article}>
      <h2>Artikel / Tulisan</h2>
      {data.map(res => (
        <div
          className={syl.article_card}
          onClick={() => NextRouter.push(`/article/${res.slug}`,null,{shallow:true})}
        >
          <div className={syl.article_image}>
            <img src={res.image} width="100%"/>
          </div>
          <div className={syl.article_info}>
            <h3>{res.title}</h3>
            <p>{res.desc}</p>
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