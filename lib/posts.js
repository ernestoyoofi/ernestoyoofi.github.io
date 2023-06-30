const fs = require("fs")
const matter = require("gray-matter")
const ptjn = require("path").join

// Path Default "~/posts"
const path = ptjn(process.cwd(), "posts")

// Get All Default Markdown
const getAllMarkdownWithContent = () => {
  const gettingAllList = fs.readdirSync(path) || []
  let returnFilter = []
  for(let filename of gettingAllList) {
    try {
      let interjer = filename.split(".")
      interjer.pop()
      const inner = fs.readFileSync(`${path}/${filename}`, "utf-8")
      const { data, content } = matter(inner)

      if(data.title && data.desc && data.time && content.length > 5) {
        returnFilter.push({
          title: data.title,
          image: data.image || null,
          desc: data.desc,
          time: data.time,
          timeLg: new Date(data.time).getTime(),
          category: Array.isArray(data.category)? data.category : ["none-category"],
          slug: interjer.join("."),
          content: content
        })
      }
    } catch(err) {
      // Some Bad
    }
  }
  return returnFilter.sort((a, b) => b.timeLg - a.timeLg)
}

const onlyGetListPosts = (isAll = false) => {
  const getMD = getAllMarkdownWithContent().map(data => ({
    title: data.title,
    image: data.image,
    desc: data.desc,
    time: data.time,
    category: data.category,
    slug: data.slug,
  }))
  if(!isAll) {
    return getMD.slice(0, 8)
  }
  return getMD
}

const readAndViewMarkdown = async (slug) => {
  try {
    const { serialize } = await import("next-mdx-remote/serialize")
    if(!fs.existsSync(`${path}/${slug}.mdx`) || !fs.lstatSync(`${path}/${slug}.mdx`).isFile()) {
      return {
        isError: false,
        viewMessage: true,
        message: "File not found !"
      }
    }
    const getMD = getAllMarkdownWithContent()
    const i_data = getMD.map(z => z.slug).indexOf(slug)
    if(i_data === -1) {
      return {
        isError: false,
        viewMessage: true,
        message: "File not found !"
      }
    }
    const data = getMD[i_data]
    return {
      meta: {
        title: data.title,
        image: data.image,
        desc: data.desc,
        time: data.time,
        category: data.category,
      },
      react_markdown: await serialize(data.content)
    }
  } catch(err) {
    return {
      isError: true,
      viewMessage: true,
      message: "Internal server is bad, please check again !"
    }
  }
}

module.exports = {
  onlyGetListPosts,
  readAndViewMarkdown
}