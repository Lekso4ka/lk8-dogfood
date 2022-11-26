import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

// Компонент - кусок сайта, который используется многократно
const Card = function() {
  return <div className="card">^_^</div>
}

// <br/>
// <div> =) </div>
// <div className="red" />

ReactDOM.render(
  <>
    <h1>Hello <span className="mark">React</span>!</h1>
    <div class="box">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  </>,
  document.querySelector("#root")
)