import Icon from "./unimiblogo.js";
import EducationItem from "./educationitem.js";
import { List } from "semantic-ui-react";
import educationData from '../json/educationData.json';

function Education() {
  return (
    <div className="education">
      <div className="title-education">EDUCATION</div>
      <hr />
      <Icon />
      {educationData.map((educationItem, index) => (
        <EducationItem
          key={index}
          degree={educationItem.degree}
          field={educationItem.field}
          link={educationItem.link}
          school={educationItem.school}
          date={educationItem.date}
          locationlink={educationItem.locationlink}
          location={educationItem.location}
          courses={
            <div className="justify">
              <List bulleted>
                {educationItem.courses.map((course, index) => (
                  <List.Item key={index}>{course}</List.Item>
                ))}
              </List>
            </div>
          }
        />
      ))}
    </div>
  );
}

export default Education;
