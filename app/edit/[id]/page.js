import client from "@/util/database"
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  const db = await client.db("culture");
  const result = await db.collection("music").findOne({"_id" : new ObjectId(props.params.id)});
  console.log(result);
  return (
    <div>
      <center><h3>Edit</h3></center>
      <form method="post" action="/api/edit">
        <div className="new">
            <div className="new-item">
              <label>Title: </label><input type="text" name="title" defaultValue={result.title} />
            </div>
            <div className="new-item">
              <label>Singer: </label><input type="text" name="singer" defaultValue={result.singer} />
            </div>
            <div className="new-item">
              <label>Release_date: </label><input type="text" name="release_date" defaultValue={result.release_date} />
            </div>
            <div>
              <input type="hidden" name="_id" value={result._id}></input>
            </div>
            <button style={{margin: "10px"}} type="submit">Edit</button>
        </div>
      </form>
    </div>
  )
}