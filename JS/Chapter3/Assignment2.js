import React from "react";
import ReactDOM from "react-dom/client";
import assignment2 from "../../css/assignment2.css";
import image from "../../asset/lotus-flower-1805784_1280.png"

const Header = () => (
  <div className="header">
  <a href="#"><img src={image} alt="logo"/></a>
  <div className="search-bar">
  <input type="text" placeholder='"yoga classes"'></input>
  <button type="submit">Search</button>
  </div>
  <i class="fa-solid fa-user user-icon"></i>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Header/>)