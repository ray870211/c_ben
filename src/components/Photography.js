/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import AlbumModel from "./AlbumModel";
import "../css/photography.css";
import PhotoItem from "./PhotoItem";
function Photography() {
  //set up 2 var ,that call [modalShow , setModalShow],and set default value = false
  //this hook on  Photography el
  const [modalShow, setModalShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  return (
    <div className='photography'>
      <PhotoItem
        modalShow={modalShow}
        setModalShow={setModalShow}
        setModalTitle={setModalTitle}
        text='街舞'
        image={require("../image/work/dance/main.jpg")}
      />
      <PhotoItem
        modalShow={modalShow}
        setModalShow={setModalShow}
        setModalTitle={setModalTitle}
        text='生活'
        image={require("../image/work/life/main.jpg")}
      />
      <PhotoItem
        modalShow={modalShow}
        setModalShow={setModalShow}
        setModalTitle={setModalTitle}
        text='房屋拍攝'
        image={require("../image/work/house/main.jpg")}
      />
      <PhotoItem
        modalShow={modalShow}
        setModalShow={setModalShow}
        setModalTitle={setModalTitle}
        text='藝文活動紀錄'
        image={require("../image/work/art_activity/main.jpg")}
      />
      <PhotoItem
        modalShow={modalShow}
        setModalShow={setModalShow}
        setModalTitle={setModalTitle}
        text='人像外拍'
        image={require("../image/work/people/main.jpg")}
      />
      <PhotoItem
        modalShow={modalShow}
        setModalShow={setModalShow}
        setModalTitle={setModalTitle}
        text='產品'
        image={require("../image/work/product/main.jpg")}
      />
      <PhotoItem
        modalShow={modalShow}
        setModalShow={setModalShow}
        setModalTitle={setModalTitle}
        text='模型'
        image={require("../image/work/toy/main.jpg")}
      />
      <AlbumModel modalTitle={modalTitle} show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
export default Photography;
