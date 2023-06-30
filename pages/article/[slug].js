import Head from "next/head"
import Layout_Markdown from "~/layout/markdown"
import { onlyGetListPosts, readAndViewMarkdown } from "~/lib/posts"

export default function ArticleReaderSlug_UI({ react_markdown, meta }) {
  return (
    <div>
      <Head>
        <title>{`${meta.title} - Ernestoyoofi`}</title>
      </Head>
      <div style={{height:50}}></div>
      <Layout_Markdown serial={react_markdown} meta={meta}/>
    </div>
  )
}

// Getting All List Params
export async function getStaticPaths() {
  const postsPaths = onlyGetListPosts().map(z => ({
    params: { slug: z.slug }
  }))

  return {
    paths: postsPaths,
    fallback: false
  }
}

// Server Side Rendering
export async function getStaticProps(context) {
  const getMark = await readAndViewMarkdown(context.params.slug)
  return {
    props: {
      ...getMark,
      slug: context.params.slug || null
    }
  }
}