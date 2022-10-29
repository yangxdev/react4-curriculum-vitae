import { List } from "semantic-ui-react";
import WorkItem from "./workitem.js";

function Hobbies() {
    return(
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
    );
}

export default Hobbies;