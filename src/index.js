import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Main from './components/Main';
import Photography from './components/Photography';
import "bootstrap/dist/css/bootstrap.min.css"
const header = ReactDOM.createRoot(
  document.getElementById('header')
);
header.render(Header());

const main = ReactDOM.createRoot(
  document.getElementById("main")
)
main.render(Main());

const photography = ReactDOM.createRoot(
  document.getElementById("photography")
)
photography.render(Photography());

reportWebVitals();