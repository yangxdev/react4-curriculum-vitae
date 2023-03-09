import WorkItem from "./workitem.js";
import { List } from "semantic-ui-react";
import workData from '../json/workData.json';

function Work() {
  return (
    <div className="work-experience">
      <div className="title-work-experience">WORK EXPERIENCE</div>
      <hr />
      <div className="work-experience-content">
        {workData.map((workItem, index) => (
          <WorkItem
            key={index}
            title={workItem.title}
            company={workItem.company}
            link={workItem.link}
            date={workItem.date}
            locationlink={workItem.locationlink}
            location={workItem.location}
            description={
              <div className="justify">
                <List bulleted>
                  {workItem.description.map((description, index) => (
                    <List.Item key={index}>{description}</List.Item>
                  ))}
                </List>
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Work;