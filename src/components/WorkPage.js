/* eslint-disable jsx-a11y/anchor-is-valid */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function WorkPage(props) {
  function buttonClick(e) {
    props.setCurrentPage("album");
    props.setSelectedAlbum(props.selected.id);
  }
  return (
    <div className='work'>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant='top' src={props.selected.cover} />
        <Card.Body>
          <Card.Title>{props.selected.title}</Card.Title>
          <Card.Text>{props.selected.text}</Card.Text>
          <Button onClick={buttonClick} variant='primary'>
            go
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default WorkPage;
