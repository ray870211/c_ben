/* eslint-disable jsx-a11y/anchor-is-valid */
import "../css/main.css";
import React from "react";
function Main() {
  return (
    <div className='main mb-5'>
      <div className='introduction'>
        <p>
          陳譽文
          <br /> 1999 台北，台灣
          <br /> 2021 亞洲大學 資訊傳播學系 台中，台灣
          <br />
          <br />
          來自跳舞圈的影像人，除了本業擅長拍攝舞蹈平面/動態，也各類型的影像專案。
          <br />
          除了影像專案的完整執行，
          <br /> 也承接「前期規劃」、「中期攝影」、「後期調光」的單一技術類業務。
          <br />
          陸地上的穩定動態拍攝，空中的空拍天際線，都有相關經驗。
          <br /> <br />
          影像創作不是我的興趣，他是我的成就感來源， <br /> 所以我很認真的對待每一個作品。
          <br />
          平面影像工作3年，熟悉平面外拍，空間攝影，商品攝影，活動紀錄，空拍360。
          <br />
          動態影像工作1年，熟悉活動紀錄，
          <br /> 「師者仰仗於人也，為師之道，以無過錯，無缺陷為上。」
          不管今天我的身分是攝影師、剪片師、調光師，後面掛著個字我就會負擔起責任。 <br /> 得獎作品
          第47屆藝美獎 入圍_漁生
        </p>
      </div>
      <img
        loading='lazy'
        className='background-img'
        alt=''
        src={require("../image/background.png")}></img>
    </div>
  );
}
export default Main;
