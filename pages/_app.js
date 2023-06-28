import "~/pages/global.css"
import Head from "next/head"
import Layout_Navbar from "~/layout/navbar"

export default function App({ Component, pageProps }) {
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
