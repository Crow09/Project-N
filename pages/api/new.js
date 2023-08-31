import client from "@/util/database";

export default async function handler(req, res) {
  if (req.method == "GET")
    return res.redirect("/new");

  const db = await client.db("culture");
  const ack = await db.collection("music").insertOne(req.body);
  let msg = "";
  if (ack.acknowledged)
    msg = "Success is success";
  else
    msg = "Fail";
  return res.redirect(302, `/message/${msg}`)
}