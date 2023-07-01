import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="id">
      <Head />
      <script src="https://assets.trakteer.id/js/trbtn-overlay.min.js"></script>
      <body className="line-numbers">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
