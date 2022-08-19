/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "../css/header.css";

function Header() {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={isScroll ? "header change" : "header"}>
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
      <a href='' className='navigation'>
        {/* 聯絡我們 */}
      </a>
      {/* <FontAwesomeIcon className='bars' icon={faBars} /> */}
    </div>
  );
}
export default Header;
