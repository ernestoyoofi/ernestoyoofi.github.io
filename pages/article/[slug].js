import Layout_Markdown from "~/layout/markdown"

export default function ArticleReaderSlug_UI() {
  return (
    <div>
      <div style={{height:50}}></div>
      <Layout_Markdown />
    </div>
  )
}

// Getting All List Params
export async function getStaticPaths() {
  const paths = [
    "test",
    "content",
    "test-2"
  ].map(z => ({ params: { slug: z } }))

  return {
    paths,
    fallback: false
  }
}

// Server Side Rendering
export async function getStaticProps(context) {
  return {
    props: {
      slug: context.params.slug || null
    }
  }
}