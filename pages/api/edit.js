import client from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == "GET")
    return res.redirect("/new");
  if (req.body.singer == "이선희")
    return res.status(200).json("이선희 안받아요");

  const db = await client.db("culture");
  const ack = await db.collection("music").updateOne(
    {"_id": new ObjectId(req.body._id)},
    {
      $set: {
        "title": req.body.title,
        "singer": req.body.singer,
        "release_date": req.body.release_date,
      }
    },
  );

  let msg = "";
  if (ack.acknowledged)
    msg = "Success is success";
  else
    msg = "Fail";
  return res.redirect(302, `/message/${msg}`)
}