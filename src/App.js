import React from "react";
import "./App.css";
import "./style/reset.css";
import "./style/fonts.css";
import "./style/style.css";
import mylogo from "./images/mylogo.jpg";
import Skills from "./js/skills.js";
import Links from "./js/links.js";
import Certifications from "./js/certifications";
import Career from "./js/career.js";
import Work from "./js/work.js";
import Education from "./js/education.js";
import QR from "./js/qr.js";
import Hobbies from "./js/hobbies.js";

function App() {
  return (
    <div className="main">
      <div className="page">
        <div className="main-row1">
          <div className="main-row1-col1">
            <div className="main-row1-inner1">
              <div className="title-name">YANG XIANG</div>
              <div className="title-logo">
                <img src={mylogo} alt="mylogo" className="mylogo" />
              </div>
            </div>
            <div className="title-job">Junior Front-End Developer</div>
            <Links />
          </div>
          <div className="main-row1-col2">
            <QR />
          </div>
        </div>
        <div className="main-row2">
          <div className="main-row2-col1">
            <Work />
            <Hobbies />
          </div>
          <div className="main-row2-col2">
            <Career />
            <Education />
            <Skills />
            <Certifications />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
