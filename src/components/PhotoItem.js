/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
function PhotoItem(props) {
  function photoClick(e) {
    props.setModalShow(true);
    props.setModalTitle(props.text);
  }
  return (
    <div className='photoItem m-2' onClick={photoClick}>
      <img loading='lazy' alt='' src={props.image} />
      <div>{props.text[0]}</div>
    </div>
  );
}
export default PhotoItem;
