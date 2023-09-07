export default function Msg(props) {
  let msg = "";
  switch (props.params.id) {
    case "200" : msg = "입력이 완료되었습니다."; break;
    case "300" : msg = "수정이 완료되었습니다."; break;
    case "400" : msg = "입력/수정이 실패하였습니다."; break;
  }
  return (
    <h2><center>{msg}</center></h2>
  )
}