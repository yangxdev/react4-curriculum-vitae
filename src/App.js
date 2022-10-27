import "./App.css";
import "./style/fonts.css";
import "./style/style.css";
import { List } from "semantic-ui-react";

let linkedin_url = "https://www.linkedin.com/in/yngx";
let github_url = "https://www.github.com/yangxdev";
let email = "j.xiang@campus.unimib.it";
let phone = "+39 3342229699";
let location_milan = "https://goo.gl/maps/BnxUdJmEbqowgU8f7";

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
      <div className="work-experience-item-company">{props.company}</div>
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
          <a className="link-location date">{props.location}</a>
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
      <div className="education-item-school">{props.school}</div>
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
      <div className="education-item-location">
        <Pointer />
        <a className="link-location date">{props.location}</a>
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
          <div className="title-name">YANG XIANG</div>
          <div className="title-job">Junior Front-End Developer</div>
          <div className="links-container">
            <div className="column1">
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
                <a href={"mailto:" + email} className="link-email link">
                  j.xiang@campus.unimib.it
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
                <a href={linkedin_url} className="link-linkedin link">
                  linkedin.com/in/yngx
                </a>
              </div>
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
                <a href={github_url} className="link-github link">
                  github.com/yangxdev
                </a>
              </div>
            </div>
            <div className="column2">
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
                <a href={"tel:" + phone} className="link-phone link">
                  +39 334 222 9699
                </a>
              </div>
              <div className="location df">
                <Pointer />
                <a href={location_milan} className="link-location link">
                  Milan, MI
                </a>
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
                  date="September 2020 - current"
                  location="Milan, MI"
                  description={
                    <div>
                      <List bulleted>
                        <List.Item>
                          <span style={{ fontWeight: "bold" }}>
                            Distributed Systems Project:{" "}
                          </span>
                          Developed the front-end side of a Python Flask
                          website. Managed server-side data (REST API) and
                          communications between front-end and back-end using
                          GitHub as Version Control.
                        </List.Item>
                        <List.Item>
                          <span style={{ fontWeight: "bold" }}>
                            Mobile Device Programming Project:{" "}
                          </span>
                          Developed, managed and directed the front-end
                          development of an Android application in a team of 4
                          people. Great use and deepening of Android Studio
                          (Java), GitHub (Pull Requests, Issues, Merge
                          conflicts).
                        </List.Item>
                      </List>
                    </div>
                  }
                />
                <WorkItem
                  title="Waiter"
                  company="Bento Sushi"
                  date="June 2019 - September 2020"
                  location="Cattolica, RN"
                  description={
                    <div>
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
                  date="May 2019 - June 2019"
                  location="Rimini, RN"
                  description={
                    <div>
                      <List bulleted>
                        <List.Item>
                          Website and database management of a Booking Engine.
                        </List.Item>
                      </List>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
          <div className="main-row1-col2">
            <div className="education">
              <div className="title-education">EDUCATION</div>
              <hr />
              <EducationItem
                degree="Bachelor of Science"
                field="Computer Science"
                school="University of Milan - Bicocca"
                date="September 2020 - current"
                location="Milan, MI"
                courses={
                  <div>
                    <List bulleted>
                      <List.Item>Programming Languages</List.Item>
                      <List.Item>Databases</List.Item>
                      <List.Item>Networks and Operative Systems</List.Item>
                      <List.Item>Mobile Devices Programming</List.Item>
                      <List.Item>Algorithms and Data Structures</List.Item>
                    </List>
                  </div>
                }
              />
            </div>
            <div className="career">
              <div className="title-career">CAREER OBJECTIVE</div>
              <hr />
              <div className="career-content">
                Soon-to-be Computer Science graduate eager to continue exploring
                the field of Front-End Development. Looking to join a
                development team to put my knowledge into practice.
              </div>
            </div>
            <div className="skills">
              <div className="title-skills">SKILLS</div>
              <hr />
              <div className="skills-content">
                <List bulleted>
                  <List.Item>JavaScript (React, Next)</List.Item>
                  <List.Item>CSS</List.Item>
                  <List.Item>HTML</List.Item>
                  <List.Item>Java</List.Item>
                </List>
              </div>
            </div>
            <div className="certifications">
              <div className="title-certifications">CERTIFICATIONS</div>
              <hr />
              <div className="certifications-content">
                <List bulleted>
                  <List.Item>
                    OLS English:
                    <span style={{ fontWeight: "bold" }}>C1</span>
                  </List.Item>
                  <List.Item>
                    Open Badge Bbetween:
                    <span style={{ fontWeight: "bold" }}>C1</span>
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
