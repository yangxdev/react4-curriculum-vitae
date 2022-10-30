import Pointer from "./pointer_IT.js";

function EducationItem(props) {
  return (
    <div className="education-item">
      <div className="education-item-title">{props.degree}</div>
      <div className="education-item-field">{props.field}</div>
      <div className="education-item-school">
        {
          <a href={props.link} target="_blank" rel="noreferrer">
            {props.school}
          </a>
        }
      </div>
      <div className="row">
        <div className="education-item-date df">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-calendar-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
          </svg>
          <div className="date">{props.date}</div>
        </div>
        <div className="education-item-location df">
          <Pointer />
          <a className="link-location date">
            {
              <a href={props.locationlink} target="_blank" rel="noreferrer">
                {props.location}
              </a>
            }
          </a>
        </div>
      </div>
      <div className="education-item-courses">
        <div className="education-item-courses-title">Corsi rilevanti</div>
        {props.courses}
      </div>
    </div>
  );
}

export default EducationItem;
