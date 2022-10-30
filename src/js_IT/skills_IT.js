import React from "react";
import { List } from "semantic-ui-react";
import { ReactComponent as JavaScript } from "../images/js.svg";
import { ReactComponent as Java } from "../images/java.svg";
import { ReactComponent as Html } from "../images/html.svg";
import { ReactComponent as Css } from "../images/css.svg";

function Skills() {
  return (
    <div className="skills">
      <div className="title-skills">SKILLS</div>
      <hr />
      <div className="skills-content justify biggerfont">
        <List bulleted>
          <List.Item>
            <div className="skills-item">
              <JavaScript className="skills-icon" />
              <span className="importantbold">JavaScript (React, Next)</span>
            </div>
          </List.Item>
          <List.Item>
            <div className="skills-item">
              <Css className="skills-icon css" />
              CSS
            </div>
          </List.Item>
          <List.Item>
            <div className="skills-item">
              <Html className="skills-icon" />
              HTML
            </div>
          </List.Item>
          <List.Item>
            <div className="skills-item">
              <Java className="skills-icon" />
              Java
            </div>
          </List.Item>
        </List>
      </div>
    </div>
  );
}

export default Skills;
