require('dotenv').config()
const { MongoClient } = require("mongodb")

const client = () => new MongoClient(
  process.env.MONGODB_URI.replace("<password>", process.env.MONGODB_PW)
)

async function getAppluse({ posts_id } = {}) {
  try {
    const sideClient = client()
    const db = sideClient.db("default")
    const results = await db.collection("appluse").findOne({ posts_id })
    sideClient.close()
    return {
      isFound: !(results === null),
      posts_id: results?.posts_id || null,
      create_time: results?.create_time || "invalid-date",
      clap: typeof results?.clap != "number"? 0 : results.clap
    }
  } catch(err) {
    return {
      isFound: false,
      posts_id: null,
      create_time: "invalid-date",
      clap: 0
    }
  }
}

async function setAppluse({ posts_id } = {}) {
  const sideClient = client()
  const db = sideClient.db("default")
  const findClapData = await db.collection("appluse").findOne({ posts_id })
  if(!findClapData) {
    const data = {
      posts_id: posts_id,
      create_time: new Date(),
      clap: 1
    }
    await db.collection("appluse").insertOne(data)
    sideClient.close()
    delete data._id
    return data
  }
  await db.collection("appluse").updateOne({ posts_id }, {
    $set: { clap: findClapData.clap + 1 }
  })
  sideClient.close()
  delete findClapData._id
  return {
    ...findClapData,
    clap: findClapData.clap + 1
  }
}

module.exports = {
  getAppluse,
  setAppluse
}