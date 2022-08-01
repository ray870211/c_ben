import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header";
import Main from "./components/Main";
import Photography from "./components/Photography";
import PhotographyIntroduction from "./components/PhotographyIntroduction";
import Film from "./components/Film";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
ReactDOM.render(
  <React.Fragment>
    <Header></Header>
    <Main></Main>
    <Photography></Photography>
    <PhotographyIntroduction></PhotographyIntroduction>
    <Film></Film>
    <AboutMe></AboutMe>
    <Footer></Footer>
  </React.Fragment>,
  document.getElementById("root")
);
reportWebVitals();
