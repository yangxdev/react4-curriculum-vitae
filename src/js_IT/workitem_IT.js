import Pointer from "./pointer_IT.js";

function WorkItem(props) {
  return (
    <div className="work-experience-item">
      <div className="work-experience-item-title">{props.title}</div>
      <div className="work-experience-item-company">
        {
          <a href={props.link} target="_blank" rel="noreferrer">
            {props.company}
          </a>
        }
      </div>
      <div className="row">
        <div className="work-experience-item-date df">
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
        <div className="work-experience-item-location df">
          <Pointer />
          <span className="link-location date">
            {
              <a href={props.locationlink} target="_blank" rel="noreferrer">
                {props.location}
              </a>
            }
          </span>
        </div>
      </div>
      <div className="work-experience-item-content">{props.description}</div>
    </div>
  );
}

export default WorkItem;
