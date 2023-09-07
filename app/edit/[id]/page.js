import client from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  const db = await client.db("lol");
  const result = await db.collection("pro").findOne({_id : new ObjectId(props.params.id)});
  console.log(props.params.id);
  return (
    <div>
      <form action="/api/edit" method="POST">
        <div className="new">
          <div className="new-item">Name : <input type="text" name="name" defaultValue={result.name} /></div>
          <div className="new-item">Line : <input type="text" name="line" defaultValue={result.line} /></div>
          <div className="new-item">Team : <input type="text" name="team" defaultValue={result.team} /></div>
        </div>
        <input name="_id" value={props.params.id} type="hidden" />
        <button type="submit">EDIT</button>
      </form>
    </div>
  )
}