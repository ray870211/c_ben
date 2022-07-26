/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import AlbumModel from "./AlbumModel";
import "../css/photography.css";
import PhotoItem from "./PhotoItem";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
function Photography() {
  //set up 2 var ,that call [modalShow , setModalShow],and set default value = false
  //this hook on  Photography el
  const [modalShow, setModalShow] = useState(false);
  const [modalTitle, setModalTitle] = useState(["街舞", "dance"]);
  return (
    <div className='photography d-flex mb-5'>
      <Row>
        <Col xs={4} md={2}>
          <PhotoItem
            className='p-2'
            modalShow={modalShow}
            setModalShow={setModalShow}
            setModalTitle={setModalTitle}
            text={["街舞", "dance"]}
            loading='lazy'
            image={require("../image/work/dance/main.jpg")}
          />
        </Col>
        <Col xs={4} md={2}>
          <PhotoItem
            className='p-2'
            modalShow={modalShow}
            setModalShow={setModalShow}
            setModalTitle={setModalTitle}
            text={["生活", "life"]}
            loading='lazy'
            image={require("../image/work/life/main.jpg")}
          />
        </Col>
        <Col xs={4} md={2}>
          <PhotoItem
            className='p-2'
            modalShow={modalShow}
            setModalShow={setModalShow}
            setModalTitle={setModalTitle}
            text={["房屋拍攝", "house"]}
            loading='lazy'
            image={require("../image/work/house/main.jpg")}
          />
        </Col>
        <Col xs={4} md={2}>
          <PhotoItem
            className='p-2'
            modalShow={modalShow}
            setModalShow={setModalShow}
            setModalTitle={setModalTitle}
            text={["藝文活動紀錄", "art_activity"]}
            loading='lazy'
            image={require("../image/work/art_activity/main.jpg")}
          />
        </Col>
        <Col xs={4} md={2}>
          <PhotoItem
            className='p-2'
            modalShow={modalShow}
            setModalShow={setModalShow}
            setModalTitle={setModalTitle}
            text={["人像外拍", "people"]}
            loading='lazy'
            image={require("../image/work/people/main.jpg")}
          />
        </Col>
        <Col xs={4} md={2}>
          <PhotoItem
            className='p-2'
            modalShow={modalShow}
            setModalShow={setModalShow}
            setModalTitle={setModalTitle}
            text={["產品", "product"]}
            loading='lazy'
            image={require("../image/work/product/main.jpg")}
          />
        </Col>
      </Row>

      <AlbumModel modalTitle={modalTitle} show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
export default Photography;
