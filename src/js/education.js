import Icon from "./unimiblogo.js";
import EducationItem from "./educationitem.js";
import { List } from "semantic-ui-react";

function Education() {
  return (
    <div className="education">
      <div className="title-education">EDUCATION</div>
      <hr />
      <Icon />
      {/* <img src={ittslogo} className="ittslogo" alt="ittslogo"></img> */}
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
  );
}

export default Education;
