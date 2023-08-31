export default function New() {
  return (
    <div>
      <center><h3>Registration</h3></center>
      <form method="post" action="/api/new">
        <div className="new">
            <div className="new-item">
              <label>Title: </label><input type="text" name="title" />
            </div>
            <div className="new-item">
              <label>Singer: </label><input type="text" name="singer" />
            </div>
            <div className="new-item">
              <label>Release_date: </label><input type="text" name="date" />
            </div>
            <button type="submit">Registration</button>
        </div>
      </form>
    </div>
  )
}