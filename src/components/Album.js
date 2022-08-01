/* eslint-disable jsx-a11y/anchor-is-valid */
// import "../css/Album.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
function Album(props) {
  console.log(props.selectedAlbum);

  function hideAlbum(e) {
    props.setCurrentPage("album");
  }
  return (
    <Container>
      <Row>
        {Object.keys(props.selectedAlbum).map(function (key) {
          return (
            <Col key={key} className='p-1' xs={6} md={4}>
              <Card className='m-2'>
                <Card.Img className='mw-100 mh-100' variant='top' src={props.selectedAlbum[key]} />
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Album;
