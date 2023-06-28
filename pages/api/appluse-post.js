import { setAppluse, getAppluse } from "~/lib/appluse-api"

export default async function GetAndPostAppluse(req, res) {
  const slug = req.query.slug
  if(req.method === "GET") {
    if(!slug) {
      return res.status(404).json({
        message: "Tidak dapat mendapatkan data tepuk tangan !"
      })
    }
    const data = await getAppluse({ posts_id: slug })
    if(!data.isFound) {
      return res.status(404).json({
        message: "Tidak dapat mendapatkan data tepuk tangan !"
      })
    }
    return res.status(200).json(data)
  } else if(req.method === "PUT") {
    if(!slug) {
      return res.status(404).json({
        message: "Tidak dapat memberikan tepuk tangan yang baru !"
      })
    }
    const data = await setAppluse({ posts_id: slug })
    return res.status(200).json(data)
  } else {
    return res.status(404).json({
      message: "Ehe, maaf ya, kamu tidak dapat menemukannya"
    })
  }
}