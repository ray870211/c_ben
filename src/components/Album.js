/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Packery from "packery";
import "../css/album.css";
import PhotoModel from "./PhotoModel";
import { Spinner } from "react-bootstrap";
function Album(props) {
  const gridRef = useRef(null);
  const [imgsLoaded, setImgsLoaded] = useState(false);
  const [showPhotoModel, setShowPhotoModel] = useState(false);
  const [photo, setPhoto] = useState("");
  const images = [];
  useEffect(() => {
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        //用非同步的方式處理img然後成功回傳image.url
        const loadImg = new Image();
        loadImg.src = image.url;
        // wait 2 seconds to simulate loading time
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(image.url);
          }, 2000);
        loadImg.onerror = (err) => reject(err);
      });
    };
    Promise.all(images.map((image) => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch((err) => console.log("Failed to load images", err));
  }, []);
  Object.keys(props.selectedAlbum).map(function (key) {
    images.push({ id: key, url: props.selectedAlbum[key] });
  });
  const photoClick = (image) => {
    setPhoto(image.url);
    setShowPhotoModel(true);
    // return <img src={require(image)}></img>;
  };
  if (imgsLoaded) {
    setTimeout(() => {
      const packery = new Packery(gridRef.current, {
        itemSelector: ".element-item",
        gutter: 0,
      });
    }, 4000);
    return (
      <Container className='album-container'>
        <Row>
          <div className='grid' ref={gridRef}>
            {imgsLoaded ? (
              images.map((image) => (
                <div
                  onClick={() => photoClick(image)}
                  className='element-item'
                  data-category='transition'>
                  <img className='photo' key={image.id} src={image.url} alt='Human' />
                </div>
              ))
            ) : (
              <Spinner animation='grow'></Spinner>
            )}
          </div>
        </Row>
        <PhotoModel
          setShowPhotoModel={setShowPhotoModel}
          showPhotoModel={showPhotoModel}
          photo={photo}></PhotoModel>
      </Container>
    );
  } else {
    return (
      <div className='m-5 d-flex justify-content-center'>
        <Spinner animation='grow'></Spinner>
      </div>
    );
  }
}

export default Album;
