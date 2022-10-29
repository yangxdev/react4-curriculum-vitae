import { ReactComponent as LinkTreeQR } from "../images/svglogo.svg";
import { ReactComponent as DemoSiteQR } from "../images/feqr.svg";

function QR() {
  return (
    <div className="qr">
      <div className="demositeqr">
        <DemoSiteQR className="demositeqr" />
        <div className="demositeqr-title">
          <div className="demositeqr-txt">
            <a href="https://bit.ly/3UaQWYq" target="_blank" rel="noreferrer">
              My Projects
            </a>
          </div>
        </div>
      </div>
      <div className="linktreeqr">
        <LinkTreeQR className="linktreeqr" />
        <div className="linktreeqr-title">
          <div className="linktreeqr-txt">
            <a
              href="https://linktr.ee/yang.xng"
              target="_blank"
              rel="noreferrer"
            >
              My Links
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QR;
