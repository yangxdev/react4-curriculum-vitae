import { List } from "semantic-ui-react";
import WorkItem from "./workitem.js";

function Projects() {
  return (
    <div className="projects">
      <div className="title-projects">PROJECTS</div>
      <hr />
      <div className="projects-content">
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
                      Developed the front-end side of a Python Flask website.
                      Managed server-side data (REST API) and frontend-backend
                      communications using GitHub as Version Control.{" "}
                    </span>
                  </span>
                </List.Item>
                <List.Item>
                  <span className="justify">
                    <span style={{ fontWeight: "600" }}>
                      Mobile Devices Programming Project:{" "}
                    </span>
                    Developed, managed and directed the front-end development of
                    an Android application in a team of 4 people. Great use and
                    deepening of Android Studio (Java), GitHub (Pull Requests,
                    Issues, Merge conflicts).
                  </span>
                </List.Item>
              </List>
            </div>
          }
        />
        <WorkItem
          title="Front-End Developer"
          company="Frontend Mentor"
          link="https://www.frontendmentor.io/profile/yangxdev"
          date={
            <div>
              April 2020 -<span style={{ fontWeight: "600" }}> current</span>
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
                  Single handedly recorded studio-quality audio recordings and
                  videos of myself playing the piano, using a DSLR camera.
                </List.Item>
                <List.Item>
                  Extensive knowledge of
                  <span style={{ fontWeight: "bold" }}>
                    {" "}
                    audio and video recording and editing{" "}
                  </span>
                  (Premiere Pro, After Effects, FL Studio, Ableton Live).
                </List.Item>
                <List.Item>
                  Gathered
                  <span style={{ fontWeight: "bold" }}>
                    {" "}
                    40000+ views and 8500+ likes{" "}
                  </span>
                  over 20+ piano music videos, connecting with musicians and
                  followers from all over the world.
                </List.Item>
                <List.Item>
                  Made music video collabs with a Canadian pianist and
                  violinist, using
                  <span style={{ fontWeight: "bold" }}>
                    {" "}
                    top-level English communication and online team-working
                    skills.
                  </span>
                </List.Item>
              </List>
            </div>
          }
        />
      </div>
    </div>
  );
}

export default Projects;
