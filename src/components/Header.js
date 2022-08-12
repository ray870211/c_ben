/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../css/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <div className='header'>
      <img alt='' src={require("../image/logo-w.png")} className='logo'></img>
      <a href='' className='navigation'>
        HOME
      </a>
      <a href='' className='navigation'>
        影片創作
      </a>
      <a href='' className='navigation'>
        商業攝影
      </a>
      <a href='' className='navigation'>
        攝影美學
      </a>
      <a href='' className='navigation'>
        聯絡我們
      </a>
      <FontAwesomeIcon className='bars' icon={faBars} />
    </div>
  );
}
export default Header;
