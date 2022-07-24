/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
function PhotoItem(props) {
  function photoClick(e) {
    props.setModalShow(true);
    props.setModalTitle(props.text);
    console.log(props.text);
  }
  return (
    <div className='photoItem m-2' onClick={photoClick}>
      <img alt='' src={props.image} />
      <div>{props.text}</div>
    </div>
  );
}
export default PhotoItem;
