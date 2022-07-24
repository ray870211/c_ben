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
function AlbumModel(props) {
  const [currentPage, setCurrentPage] = useState("WorkPage");
  const [selectedAlbum, setSelectedAlbum] = useState("");
  return (
    <Modal
      fullscreen={true}
      {...props}
      aria-labelledby='contained-modal-title-vcenter'
      size='sm'
      centered>
      <Modal.Header className='bg-dark' closeButton>
        {currentPage === "WorkPage" && (
          <Modal.Title id='contained-modal-title-vcenter'>{props.modalTitle}</Modal.Title>
        )}
        {currentPage === "album" && (
          <button
            onClick={() => {
              setCurrentPage("WorkPage");
            }}>
            <FontAwesomeIcon className='bars' icon={faAngleLeft} />
          </button>
        )}
      </Modal.Header>
      {currentPage === "WorkPage" && (
        <Modal.Body className='bg-dark show-grid'>
          <Container fluid>
            <Row className='m-2'>
              <Col xs={6} md={4}>
                <WorkPage
                  setCurrentPage={setCurrentPage}
                  setSelectedAlbum={setSelectedAlbum}
                  selected={WorkData.dance[1]}></WorkPage>
              </Col>
              <Col xs={6} md={4}>
                <WorkPage
                  setCurrentPage={setCurrentPage}
                  setSelectedAlbum={setSelectedAlbum}
                  selected={WorkData.dance[2]}></WorkPage>
              </Col>
              <Col xs={6} md={4}>
                <WorkPage
                  setCurrentPage={setCurrentPage}
                  setSelectedAlbum={setSelectedAlbum}
                  selected={WorkData.dance[3]}></WorkPage>
              </Col>
            </Row>
            <Row className='m-2'>
              <Col xs={6} md={4}>
                <WorkPage
                  setCurrentPage={setCurrentPage}
                  setSelectedAlbum={setSelectedAlbum}
                  selected={WorkData.dance[4]}></WorkPage>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      )}
      {currentPage === "album" && (
        <Container fluid>
          <Album
            selectedAlbum={selectedAlbum}
            // selected={WorkData.dance[4]}
            setCurrentPage={setCurrentPage}></Album>
        </Container>
      )}

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AlbumModel;
