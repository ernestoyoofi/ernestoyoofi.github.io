import Link from "next/link"
import NextRouter from "next/router"

export default function Layout_Markdown() {
  return (
    <>
      <button onClick={() => {
        NextRouter.back()
      }}>Go Back</button>
    </>
  )
}