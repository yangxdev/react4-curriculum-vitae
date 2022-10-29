import WorkItem from "./workitem.js";
import { List } from "semantic-ui-react";

function Work() {
  return (
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
          title="Waiter"
          company="Bento Sushi"
          link="https://goo.gl/maps/gzsfJ9QELKVYoVqD6"
          date="June 2019 - September 2020"
          locationlink="https://www.google.com/maps/place/Cattolica,+Italy"
          location="Cattolica, RN"
          description={
            <div className="justify">
              <List bulleted>
                <List.Item>Taking orders and managing reservations.</List.Item>
                <List.Item>Serving food and beverages to customers.</List.Item>
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
                  First steps in the world of web development, learning the
                  company's workflow.
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
  );
}

export default Work;