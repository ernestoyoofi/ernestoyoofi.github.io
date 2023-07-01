import syl from "~/layout/markdown.module.css"
import { MDXRemote } from "next-mdx-remote"
import NextRouter from "next/router"

export default function Layout_Markdown({ serial, meta }) {
  return (
    <div className={"response " + syl.supported_mdx}>
      <button onClick={() => {
        NextRouter.back()
      }} className={syl.markdown_back}>Go Back</button>
      <h2>{meta?.title}</h2>
      {meta?.image? <img src={meta.image} width="100%" />:""}
      <div className={syl.markdown_view}>
        {serial? <MDXRemote {...serial} /> : ""}
      </div>
    </div>
  )
}