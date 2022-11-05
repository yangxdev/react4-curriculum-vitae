import React from "react";
import "./App.css";
import "./style/reset.css";
import "./style/fonts.css";
import mylogo from "./images/mylogo.jpg";
import "./build/index.css";

// import "./style/style_IT.css";
// import Skills from "./js_IT/skills_IT.js";
// import Links from "./js_IT/links_IT.js";
// import Certifications from "./js_IT/certifications_IT";
// import Career from "./js_IT/career_IT.js";
// import Work from "./js_IT/work_IT.js";
// import Education from "./js_IT/education_IT.js";
// import QR from "./js_IT/qr_IT.js";
// import Projects from "./js_IT/projects_IT.js";

// import "./build/index.css";
import Skills from "./js/skills.js";
import Links from "./js/links.js";
import Certifications from "./js/certifications";
import Career from "./js/career.js";
import Work from "./js/work.js";
import Education from "./js/education.js";
import QR from "./js/qr.js";
import Projects from "./js/projects.js";

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
            <Projects />
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
