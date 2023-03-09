import { List } from "semantic-ui-react";
import certificationData from "../json/certificationData.json";

function Certifications() {
  return(
    <div className="certifications">
      <div className="title-certifications">CERTIFICATIONS</div>
      <hr />
      <div className="certifications-content justify biggerfont">
        <List bulleted>
          {certificationData.map((certification, index) => (
            <List.Item key={index}>
              {certification.title}: <span style={{ fontWeight: "bold" }}>{certification.level}</span>
            </List.Item>
          ))}
        </List>
      </div>
    </div>
  );
}

export default Certifications;