import client from "@/util/database";
import Link from "next/link";

export default async function List() {
  const db = await client.db("lol");
  const list = await db.collection("pro").find().toArray();
  return (
    <div className="list">
      {
        list.map(e => <div className="list-item"><Link href={`/detail/${e._id}`}>{e.name}</Link><Link href={`/edit/${e._id}`}>🔨</Link></div>)
      }
    </div>
  )
}