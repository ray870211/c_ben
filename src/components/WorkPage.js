/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Card from "react-bootstrap/Card";
import "../css/work-page.css";
function WorkPage(props) {
  function buttonClick(e) {
    props.setCurrentPage("album");
    props.setSelectedAlbum(props.selected.images);
  }
  return (
    <div className='work'>
      <Card className='m-2' style={{ width: "18rem" }}>
        <Card.Img
          onClick={buttonClick}
          className='main-img'
          variant='top'
          src={props.selected.cover}
        />
        <h3 className='card-title'>{props.selected.title}</h3>
        <p className='card-text'>{props.selected.text}</p>
        {/* <Card.Body>
          <Card.Title>{props.selected.title}</Card.Title>
          <Card.Text>{props.selected.text}</Card.Text>
        </Card.Body> */}
      </Card>
    </div>
  );
}
export default WorkPage;
