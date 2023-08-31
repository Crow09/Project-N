export default function Msg(props) {
  return (
    <div className="msg">
      {decodeURI(props.params.msg)}
    </div>
  )
}