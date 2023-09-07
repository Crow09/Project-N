import client from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == "GET")
    return res.status(302).json("겟은 안돼");
  if (req.body.team == "GEN G")
    return res.status(302).json("젠지는 너무 잘해서 안돼");
  const editObj = {...req.body};
  delete editObj._id;
  console.log(editObj);
  const db = await client.db("lol");
  const result = await db.collection("pro").updateOne({"_id" : new ObjectId(req.body._id)}, {$set : {...editObj}});
  if (result.acknowledged)
    res.redirect(302, '/msg/300');
  else
    res.redirect(302, '/msg/400');
}