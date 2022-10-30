import { ReactComponent as LinkTreeQR } from "../images/svglogo.svg";
import { ReactComponent as DemoSiteQR } from "../images/feqr.svg";

function QR() {
  return (
    <div className="qr">
      <div className="demositeqr">
        <DemoSiteQR className="demositeqr" />
        <div className="demositeqr-title">
          <div className="demositeqr-txt">
            <a href="https://www.frontendmentor.io/profile/yangxdev/solutions" target="_blank" rel="noreferrer">
              I miei progetti
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
              I miei link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QR;
