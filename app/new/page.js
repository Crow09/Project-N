export default async function New() {
  return (
    <div>
      <form action="/api/new" method="POST">
        <div className="new">
          <div className="new-item">Name : <input type="text" name="name" /></div>
          <div className="new-item">Line : <input type="text" name="line" /></div>
          <div className="new-item">Team : <input type="text" name="team" /></div>
        </div>
        <button type="submit">REGISTRATION</button>
      </form>
    </div>
  )
}