import "~/pages/prims.css"
import "~/pages/global.css"
import Head from "next/head"
import Layout_Navbar from "~/layout/navbar"
import { useEffect } from "react"

export default function App({ Component, pageProps }) {
  useEffect(() => {
    document.querySelector('[data-styled="active"]')?.remove()
  })
  return (
    <>
      <Head>
        <title>Ernestoyoofi</title>
        <meta name="description" content="Situs artikel resmi dari ernestoyoofi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://ernestoyoofi-googlecloaddrivew-cdn.on.drv.tw" crossOrigin/>
      </Head>
      <div style={{position: fixed; }}>Website Blog Telah Pindah Ke <a href="https://ernestoyoofi.vercel.app">https://ernestoyoofi.vercel.app</a></div>
      <Layout_Navbar />
      <Component {...pageProps} />
    </>
  )
}
