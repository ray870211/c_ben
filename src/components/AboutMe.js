/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import "../css/about-me.css";
function AboutMe() {
  const [selected, setSelected] = useState(1);

  const ReturnContent = () => {
    switch (selected) {
      case 1:
        return (
          <div className='text'>
            <p>
              參與品牌與企業合作
              <br /> ｜空間攝影｜
              <br /> 天境空間設計聯悅聚/平面 <br /> 正揚臻品/平面 <br /> 宏碁ateam/平面
              <br />
              ｜商品攝影｜
              <br /> 自行拍攝創作/平面
              <br /> 蚵專生/動態
              <br /> ｜活動紀錄｜
              <br /> 呈藝整合行銷有限公司/平面
              <br /> 台中盃街舞大賽/平面/動態
              <br />
              ｜YT剪輯｜ 萊斯娛樂工作室
              <br /> Hero 4 Who 2020國際街舞大賽/平面/動態 <br /> 2021辛丑正科琉球迎王祭/平面
              各校街舞表演
            </p>
          </div>
        );
        break;

      case 2:
        return (
          <div className='text'>
            常用工具有ps、lr、pr、ae、達芬奇
            <br />
            <p>平面拍攝</p>
            <br /> 人像外拍引導、活動紀錄、室內商品拍攝打燈、建築拍攝+後期PS <br />
            <p>動態拍攝</p> <br />
            活動紀錄、手持穩定器、b roll、訪談節目 <br />
            <p>空拍</p> <br />
            空拍360 <br />
            <p>後製</p>
            <br />
            -YT娛樂片、商品形象短片、活動highlight <br />
            套片順剪、精剪、特效字卡、轉場特效 <p>調光</p> <br />
            -達芬奇18
            <br /> 調色工具、調色應用、色彩理論、視波器
            <br /> <p>影像知識</p>
            <br />
            可以在不同設備切換工流
            <br />
            影像編碼、封裝格式、色彩管理、色彩空間、色彩模型、色域、gamma曲線、色度彩樣、色深
          </div>
        );
        break;
    }
  };
  return (
    <div className='about-me mb-5 '>
      <img style={{ width: "100%" }} src={require("../image/DSC02879.png")}></img>
      <div className='about-me-content '>
        <Row className='justify-content-center'>
          <Col className='text-center'>
            <button className='select-button' onClick={() => setSelected(1)}>
              -體驗/經歷-
            </button>
            <button className='select-button' onClick={() => setSelected(2)}>
              -專長/專業-
            </button>
          </Col>
        </Row>
        <Row>
          <ReturnContent selected={selected} />
        </Row>
      </div>
    </div>
  );
}

export default AboutMe;
