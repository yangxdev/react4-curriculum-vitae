import { List } from "semantic-ui-react";

function Certifications() {
    return(
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
    );
}

export default Certifications;