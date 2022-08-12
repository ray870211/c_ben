/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../css/about-me.css";
function AboutMe() {
  return (
    <div className='about-me mb-5'>
      <img src={require("../image/DSC02879.png")}></img>
      <div className='about-me-text'>
        您好，我叫陳譽文，有三年活動紀錄的經驗，是資傳系畢業生是從平面攝影開始入行，再來是動態的拍攝，現階段想要專職走調光調色。得知貴公司在徵調光師，想要專門走這一塊，希望長期配合。現階段對調光調色有一定程度的了解想要有測試機會。擅長的軟體有Pr、Lr、Ps跟達芬奇這邊附上給貴公司的作品集
      </div>
    </div>
  );
}
export default AboutMe;
