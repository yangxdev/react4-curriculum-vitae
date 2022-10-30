import { List } from "semantic-ui-react";

function Certifications() {
    return(
        <div className="certifications">
              <div className="title-certifications">CERTIFICAZIONI</div>
              <hr />
              <div className="certifications-content justify biggerfont">
                <List bulleted>
                  <List.Item>
                    OLS - Inglese:
                    <span style={{ fontWeight: "bold" }}> C1</span>
                  </List.Item>
                  <List.Item>
                    Open Badge Bbetween - Inglese:
                    <span style={{ fontWeight: "bold" }}> C1</span>
                  </List.Item>
                </List>
              </div>
            </div>
    );
}

export default Certifications;