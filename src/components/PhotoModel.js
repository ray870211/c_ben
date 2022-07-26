import React from "react";
import Modal from "react-bootstrap/Modal";

function PhotoModel(props) {
  const style = {
    maxWidth: "100%",
    maxHeight: "100%",
  };
  return (
    <>
      <Modal
        show={props.showPhotoModel}
        onHide={() => props.setShowPhotoModel(false)}
        dialogClassName='modal-90w'
        aria-labelledby='example-custom-modal-styling-title'>
        <Modal.Body className='d-flex justify-content-center'>
          <img loading='lazy' style={style} src={props.photo} alt='Human'></img>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PhotoModel;
