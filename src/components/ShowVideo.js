import React from "react";
import Modal from "react-bootstrap/Modal";
import "../../node_modules/video-react/dist/video-react.css";
import { Player } from "video-react";
function ShowVideo(props) {
  console.log(props.video);
  const style = {
    backgroundColor: "black",
  };
  return (
    <>
      <Modal
        show={props.showVideoModel}
        onHide={() => props.setShowVideoModel(false)}
        dialogClassName='modal-90w'
        aria-labelledby='example-custom-modal-styling-title'>
        <Modal.Body style={style}>
          <Player>
            <source src={props.video} />
          </Player>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ShowVideo;
