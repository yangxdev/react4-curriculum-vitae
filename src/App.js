import React from "react";
import "./App.css";
import "./style/fonts.css";
import "./style/style.css";
import { List } from "semantic-ui-react";
import mylogo from "./images/mylogo.jpg";
import { ReactComponent as LinkTreeQR } from "./images/svglogo.svg";
import { ReactComponent as DemoSiteQR } from "./images/feqr.svg";
import Icon from "./unimiblogo.js";
import ittslogo from "./images/itts.png";
import { ReactComponent as JavaScript } from "./images/js.svg";
import { ReactComponent as Java } from "./images/java.svg";
import { ReactComponent as Html } from "./images/html.svg";
import { ReactComponent as Css } from "./images/css.svg";

let linkedin_url = "https://www.linkedin.com/in/yngx";
let github_url = "https://www.github.com/yangxdev";
let instagram_url = "https://www.instagram.com/yang.xng/";
let email = "j.xiang@campus.unimib.it";
let phone = "+39 3342229699";

function print() {
  var print_div = document.getElementById("page");
  var print_area = window.open();
  print_area.document.write(print_div.innerHTML);
  print_area.document.close();
  print_area.focus();
  print_area.print();
  print_area.close();
}
function Pointer() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-geo-alt-fill"
      viewBox="0 0 16 16"
    >
      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
    </svg>
  );
}
function WorkItem(props) {
  return (
    <div className="work-experience-item">
      <div className="work-experience-item-title">{props.title}</div>
      <div className="work-experience-item-company">
        {
          <a href={props.link} target="_blank" rel="noreferrer">
            {props.company}
          </a>
        }
      </div>
      <div className="row">
        <div className="work-experience-item-date df">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-calendar-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
          </svg>
          <div className="date">{props.date}</div>
        </div>
        <div className="work-experience-item-location df">
          <Pointer />
          <span className="link-location date">
            {
              <a href={props.locationlink} target="_blank" rel="noreferrer">
                {props.location}
              </a>
            }
          </span>
        </div>
      </div>
      <div className="work-experience-item-content">{props.description}</div>
    </div>
  );
}
function EducationItem(props) {
  return (
    <div className="education-item">
      <div className="education-item-title">{props.degree}</div>
      <div className="education-item-field">{props.field}</div>
      <div className="education-item-school">
        {
          <a href={props.link} target="_blank" rel="noreferrer">
            {props.school}
          </a>
        }
      </div>
      <div className="row">
        <div className="education-item-date df">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-calendar-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
          </svg>
          <div className="date">{props.date}</div>
        </div>
        <div className="education-item-location df">
          <Pointer />
          <a className="link-location date">
            {
              <a href={props.locationlink} target="_blank" rel="noreferrer">
                {props.location}
              </a>
            }
          </a>
        </div>
      </div>
      <div className="education-item-courses">
        <div className="education-item-courses-title">Relevant courses</div>
        {props.courses}
      </div>
    </div>
  );
}

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
            <div className="links-container">
              <div className="column1">
                <div className="github df">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  <a
                    href={github_url}
                    target="_blank"
                    rel="noreferrer"
                    className="link-github link"
                  >
                    github.com/yangxdev
                  </a>
                </div>
                <div className="linkedin df">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                  <a
                    href={linkedin_url}
                    target="_blank"
                    rel="noreferrer"
                    className="link-linkedin link"
                  >
                    linkedin.com/in/yngx
                  </a>
                </div>
                <div className="instagram df">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                  <a
                    href={instagram_url}
                    target="_blank"
                    rel="noreferrer"
                    className="link-instagram link"
                  >
                    instagram.com/yang.xng
                  </a>
                </div>
              </div>
              <div className="column2">
                <div className="email df">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-envelope-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                  </svg>
                  <a
                    href={"mailto:" + email}
                    target="_blank"
                    rel="noreferrer"
                    className="link-email link"
                  >
                    j.xiang@campus.unimib.it
                  </a>
                </div>
                <div className="number df">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-telephone-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                    />
                  </svg>
                  <a
                    href={"tel:" + phone}
                    target="_blank"
                    rel="noreferrer"
                    className="link-phone link"
                  >
                    +39 334 222 9699
                  </a>
                </div>
                <div className="location df">
                  <Pointer />
                  <a
                    href="https://www.google.com/maps/place/Milan,+Italy"
                    className="link-location link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Milan, MI
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="main-row1-col2">
            <div className="demositeqr">
              <DemoSiteQR className="demositeqr" />
              <div className="demositeqr-title">
                <div className="demositeqr-txt">
                  <a
                    href="https://bit.ly/3UaQWYq"
                    target="_blank"
                    rel="noreferrer"
                  >
                    My Projects
                  </a>
                </div>
              </div>
            </div>
            <div className="linktreeqr">
              <LinkTreeQR className="linktreeqr" />
              <div className="linktreeqr-title">
                <div className="linktreeqr-txt">
                  <a
                    href="https://linktr.ee/yang.xng"
                    target="_blank"
                    rel="noreferrer"
                  >
                    My Links
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-row2">
          <div className="main-row2-col1">
            <div className="work-experience">
              <div className="title-work-experience">WORK EXPERIENCE</div>
              <hr />
              <div className="work-experience-content">
                <WorkItem
                  title="Computer Science Student"
                  company="University of Milan - Bicocca"
                  link="https://www.unimib.it/"
                  date={
                    <div>
                      September 2020 -
                      <span style={{ fontWeight: "600" }}> current</span>
                    </div>
                  }
                  locationlink="https://www.google.com/maps/place/Milan,+Italy"
                  location="Milan, MI"
                  description={
                    <div>
                      <List bulleted>
                        <List.Item>
                          <span className="justify">
                            <span style={{ fontWeight: "600" }}>
                              Distributed Systems Project:{" "}
                            </span>
                            <span style={{}}>
                              Developed the front-end side of a Python Flask
                              website. Managed server-side data (REST API) and
                              frontend-backend communications using GitHub as Version Control.{" "}
                            </span>
                          </span>
                        </List.Item>
                        <List.Item>
                          <span className="justify">
                            <span style={{ fontWeight: "600" }}>
                              Mobile Devices Programming Project:{" "}
                            </span>
                            Developed, managed and directed the front-end
                            development of an Android application in a team of 4
                            people. Great use and deepening of Android Studio
                            (Java), GitHub (Pull Requests, Issues, Merge
                            conflicts).
                          </span>
                        </List.Item>
                      </List>
                    </div>
                  }
                />
                <WorkItem
                  title="Waiter"
                  company="Bento Sushi"
                  link="https://goo.gl/maps/gzsfJ9QELKVYoVqD6"
                  date="June 2019 - September 2020"
                  locationlink="https://www.google.com/maps/place/Cattolica,+Italy"
                  location="Cattolica, RN"
                  description={
                    <div className="justify">
                      <List bulleted>
                        <List.Item>
                          Taking orders and managing reservations.
                        </List.Item>
                        <List.Item>
                          Serving food and beverages to customers.
                        </List.Item>
                        <List.Item>Setting and preparing the room.</List.Item>
                      </List>
                    </div>
                  }
                />
                <WorkItem
                  title="Developer Intern"
                  company="IPER.NET"
                  link="https://www.iperbooking.com/"
                  date="May 2019 - June 2019"
                  locationlink="https://www.google.com/maps/place/Rimini,+Italy"
                  location="Rimini, RN"
                  description={
                    <div className="justify">
                      <List bulleted>
                        <List.Item>
                          First steps in the world of web development, learning
                          the company's workflow.
                        </List.Item>
                        <List.Item>
                          Website and database management of a Booking Engine.
                        </List.Item>
                      </List>
                    </div>
                  }
                />
              </div>
            </div>
            <div className="hobbies">
              <div className="title-hobbies">HOBBIES</div>
              <hr />
              <div className="hobbies-content">
                <WorkItem
                  title="Front-End Developer"
                  company="Frontend Mentor"
                  link="https://www.frontendmentor.io/profile/yangxdev"
                  date={
                    <div>
                      April 2020 -
                      <span style={{ fontWeight: "600" }}> current</span>
                    </div>
                  }
                  locationlink="https://www.google.com/maps/place/Milan,+Italy"
                  location="Rimini, RN & Milan, MI"
                  description={
                    <div className="justify">
                      <List bulleted>
                        <List.Item>
                          Developed
                          <span style={{ fontWeight: "bold" }}>
                            {" "}
                            10+ front-end projects{" "}
                          </span>
                          starting with Vanilla JS, currently using React.
                        </List.Item>
                      </List>
                    </div>
                  }
                />
                <WorkItem
                  title="Pianist"
                  company="Instagram"
                  link="https://www.instagram.com/yang.xng/"
                  date="March 2021 - October 2021"
                  locationlink="https://www.google.com/maps/place/Rimini,+Italy"
                  location="Rimini, RN"
                  description={
                    <div className="justify">
                      <List bulleted>
                        <List.Item>
                          Single handedly recorded studio-quality audio
                          recordings and videos of myself playing the piano,
                          using a DSLR camera.
                        </List.Item>
                        <List.Item>
                          Extensive knowledge of
                          <span style={{ fontWeight: "bold" }}>
                            {" "}
                            audio and video recording and editing{" "}
                          </span>
                          (Premiere Pro, After Effects, FL Studio, Ableton
                          Live).
                        </List.Item>
                        <List.Item>
                          Gathered
                          <span style={{ fontWeight: "bold" }}>
                            {" "}
                            40000+ views and 8500+ likes{" "}
                          </span>
                          over 20+ piano music videos, connecting with musicians
                          and followers from all over the world.
                        </List.Item>
                        <List.Item>
                          Made music video collabs with a Canadian pianist and
                          violinist, using
                          <span style={{ fontWeight: "bold" }}>
                            {" "}
                            top-level English communication and online
                            team-working skills.
                          </span>
                        </List.Item>
                      </List>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
          <div className="main-row2-col2">
            <div className="career">
              <div className="title-career">CAREER OBJECTIVE</div>
              <hr />
              <div className="career-content">
                Soon-to-be
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  Computer Science graduate{" "}
                </span>
                eager to kickstart my career in the field of
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  Front-End Development.{" "}
                </span>
                <br></br>Looking to join a development team to put my knowledge into
                practice.
              </div>
            </div>
            <div className="education">
              <div className="title-education">EDUCATION</div>
              <hr />
              < Icon/>
              <img src={ittslogo} className="ittslogo" alt="ittslogo"></img>
              <EducationItem
                degree="Bachelor of Science"
                field="Computer Science"
                link="https://www.unimib.it/"
                school="University of Milan - Bicocca"
                date="September 2020 - current"
                locationlink="https://www.google.com/maps/place/Milan,+Italy"
                location="Milan, MI"
                courses={
                  <div className="justify">
                    <List bulleted>
                      <List.Item>Networks and Operative Systems</List.Item>
                      <List.Item>Algorithms and Data Structures</List.Item>
                      <List.Item>Mobile Devices Programming</List.Item>
                      <List.Item>Programming Languages</List.Item>
                      <List.Item>Databases</List.Item>
                    </List>
                  </div>
                }
              />
              <EducationItem
                degree="Computer Science Diploma"
                field="Information Technology"
                link="https://www.ittsrimini.edu.it/"
                school="ITTS Belluzzi - Da Vinci"
                date="Sept. 2015 - June 2020"
                locationlink="https://www.google.com/maps/place/Rimini,+Italy"
                location="Rimini, RN"
                courses={
                  <div className="justify">
                    <List bulleted>
                      <List.Item>Web Technology</List.Item>
                      <List.Item>Computer Networking</List.Item>
                    </List>
                  </div>
                }
              />
            </div>
            <div className="skills">
              <div className="title-skills">SKILLS</div>
              <hr />
              <div className="skills-content justify biggerfont">
                <List bulleted>
                  <List.Item>
                    <div className="skills-item">
                      <JavaScript className="skills-icon" />
                      <span className="importantbold">
                        JavaScript (React, Next)
                      </span>
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
            <div className="certifications">
              <div className="title-certifications">CERTIFICATIONS</div>
              <hr />
              <div className="certifications-content justify biggerfont">
                <List bulleted>
                  <List.Item>
                    OLS English:
                    <span style={{ fontWeight: "bold" }}> C1</span>
                  </List.Item>
                  <List.Item>
                    Open Badge Bbetween English:
                    <span style={{ fontWeight: "bold" }}> C1</span>
                  </List.Item>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
