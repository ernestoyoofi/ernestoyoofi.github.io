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
      </Head>
      <Layout_Navbar />
      <Component {...pageProps} />
    </>
  )
}
