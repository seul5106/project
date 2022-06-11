import React from "react";

//Link 대신 NavLink를 import한다.
import { Route, NavLink, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Info1 from "./pages/Info1";
import Info2 from "./pages/Info2";

// CSS 파일
import "./assets/css/reset.css";
import "./assets/css/common.css";
import "./assets/css/index.css";


// img 파일
import logo from "./assets/img/logo.png";
import home from "./assets/img/home.jpg";
import qlink_call from "./assets/img/qlink_call.gif";
import qlink_map from "./assets/img/qlink_map.gif";

const App = () => {
  return (
    <div>
      <div id="container">
        {/* 헤더(공통) */}
        <div id="header">
          <h1>
            <a href="index.html">
              <img src={logo} alt="한강빌리지" />
            </a>
          </h1>
          <span>
            <a href="index.html">
              <img src={home} alt="Home" />
            </a>
          </span>
        </div>
        <hr />

        <Routes>         
            <Route path="/index.html" element={<Home/>} />
            <Route path="/info1" element={<Info1/>} />
            <Route path="/info2" element={<Info2/>} />
        </Routes>
        

        {/* <!--하단(공통)--> */}
        <div id="footer">
          <nav>
            <NavLink className="normalLink" to="tel:12345678">
              <img src={qlink_call} alt="분양상담전화" />
            </NavLink>
            <NavLink className="normalLink" to="#">
              <img src={qlink_map} alt="찾아오시는 길" />
            </NavLink>
          </nav>
          <address>Copyright 2014. HANGANG VILLAGE</address>
        </div>
      </div>

    </div>
  );
};

export default App;
