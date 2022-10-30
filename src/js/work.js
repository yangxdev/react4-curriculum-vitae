import WorkItem from "./workitem.js";
import { List } from "semantic-ui-react";

function Work() {
  return (
    <div className="work-experience">
      <div className="title-work-experience">WORK EXPERIENCE</div>
      <hr />
      <div className="work-experience-content">
        <WorkItem
          title="Room Service Waiter"
          company="Bento Sushi"
          link="https://goo.gl/maps/gzsfJ9QELKVYoVqD6"
          date="June 2019 - September 2020"
          locationlink="https://www.google.com/maps/place/Cattolica,+Italy"
          location="Cattolica, RN"
          description={
            <div className="justify">
              <List bulleted>
                <List.Item>Taking orders and managing reservations.</List.Item>
                <List.Item>Setting and preparing the room.</List.Item>
              </List>
            </div>
          }
        />
        <WorkItem
          title="Developer Intern"
          company="iperbooking"
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