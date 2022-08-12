/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { VideoData } from "./VideoData";
import ShowVideo from "./ShowVideo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "../css/flim.css";
function Film() {
  console.log(VideoData[0]);
  const [showVideoModel, setShowVideoModel] = useState(false);
  const [video, setVideo] = useState("");
  const showVideo = (videoUrl) => {
    setVideo(videoUrl);
    setShowVideoModel(true);
  };
  return (
    <div className='film mb-5'>
      <Row className='mb-2'>
        {VideoData.map((video) => (
          <Col
            className='position-relative'
            onClick={() => showVideo(video.url)}
            xs={4}
            md={4}
            lg={4}
            xl={4}>
            <img className='preview' src={video.preview}></img>
            <FontAwesomeIcon className='bars play-icon' icon={faPlay} />
            <p className='text'>{video.text}</p>
          </Col>
        ))}
      </Row>
      <ShowVideo
        setShowVideoModel={setShowVideoModel}
        showVideoModel={showVideoModel}
        video={video}></ShowVideo>
    </div>
  );
}
export default Film;
