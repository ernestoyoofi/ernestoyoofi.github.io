import Head from "next/head"
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

export default function Home_UI({ article }) {
  return (
    <>
      <Head>
        <title>Ernestoyoofi - Beranda</title>
      </Head>
      <Layout_Banner
        sources={bannerImage}
        aboutPic={bannerImageAbout}
        components={<ComponentsBanner />}
      />
      <div className="response">
        <Layout_HomeList data={article}/>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const article_api = require("~/lib/posts")

  return {
    props: {
      article: article_api.onlyGetListPosts()
    }
  }
}