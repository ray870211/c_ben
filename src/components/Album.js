/* eslint-disable jsx-a11y/anchor-is-valid */
// import "../css/Album.css";
import Card from "react-bootstrap/Card";
import WorkData from "./WorkData";
function Album(props) {
  console.log(props);

  function hideAlbum(e) {
    props.setCurrentPage("album");
  }
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant='top' src={props.selectedAlbum} />
    </Card>
  );
}

export default Album;
