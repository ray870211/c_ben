import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import "../css/album-model.css";
import WorkPage from "./WorkPage";
import WorkData from "./WorkData";
import Album from "./Album";
// import LazyLoad from "vanilla-lazyload";
function AlbumModel(props) {
  const [currentPage, setCurrentPage] = useState("WorkPage");
  const [selectedAlbum, setSelectedAlbum] = useState("");

  return (
    <Modal
      {...props}
      // show={show}
      // onHide={() => setShow(false)}
      dialogClassName='main-modal'
      aria-labelledby='example-custom-modal-styling-title'
      centered>
      <Modal.Header className='bg-dark w-100' closeButton>
        {currentPage === "WorkPage" && (
          <Modal.Title id='contained-modal-title-vcenter'>{props.modalTitle[0]}</Modal.Title>
        )}
        {currentPage === "album" && (
          <FontAwesomeIcon
            style={{ color: "white" }}
            onClick={() => {
              setCurrentPage("WorkPage");
            }}
            className='bars'
            icon={faAngleLeft}
          />
        )}
      </Modal.Header>
      {currentPage === "WorkPage" && (
        <Modal.Body className='bg-dark show-grid'>
          <Container fluid>
            <Row className='m-2'>
              {Object.keys(WorkData[props.modalTitle[1]]).map(function (key) {
                return (
                  <Col xs={6} md={6} lg={4} xl={3}>
                    <WorkPage
                      key={key}
                      setCurrentPage={setCurrentPage}
                      setSelectedAlbum={setSelectedAlbum}
                      selected={WorkData[props.modalTitle[1]][key]}></WorkPage>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </Modal.Body>
      )}
      {currentPage === "album" && (
        <Container fluid>
          <Album selectedAlbum={selectedAlbum} setCurrentPage={setCurrentPage}></Album>
        </Container>
      )}

      <Modal.Footer className='bg-dark'>
        <button className='p-1 modal-close-btn' onClick={props.onHide}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default AlbumModel;
