const fs = require("fs")
const ptjn = require("path").join

// Path Default "~/posts"
const path = ptjn(process.cwd(), "posts")

// Get All Default Markdown
const getAllMarkdownWithContent = () => {
  const gettingAllList = fs.
}