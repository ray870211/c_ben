/* eslint-disable jsx-a11y/anchor-is-valid */
import '../css/photography.css'
import PhotoItem from "./PhotoItem"

function Photography() {
    return (
        <div className="photography">
            <PhotoItem text="街舞" name={require("../image/work/dance/main.jpg")}/>
            <PhotoItem text="生活" name={require("../image/work/life/main.jpg")} />
            <PhotoItem text="房屋拍攝" name={require("../image/work/house/main.jpg")} />
            <PhotoItem text="藝文活動紀錄" name={require("../image/work/art_activity/main.jpg")} />
            <PhotoItem text="人像外拍" name={require("../image/work/people/main.jpg")} />
            <PhotoItem text="產品" name={require("../image/work/product/main.jpg")} />
            <PhotoItem text="模型" name={require("../image/work/toy/main.jpg")} />
        </div>
    );
}
export default Photography;