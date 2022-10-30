import WorkItem from "./workitem_IT.js";
import { List } from "semantic-ui-react";

function Work() {
  return (
    <div className="work-experience">
      <div className="title-work-experience">ESPERIENZA LAVORATIVA</div>
      <hr />
      <div className="work-experience-content">
        <WorkItem
          title="Cameriere di sala"
          company="Bento Sushi"
          link="https://goo.gl/maps/gzsfJ9QELKVYoVqD6"
          date="Giugno 2019 - Settembre 2020"
          locationlink="https://www.google.com/maps/place/Cattolica,+Italy"
          location="Cattolica, RN"
          description={
            <div className="justify">
              <List bulleted>
                <List.Item>Gestione ordini e prenotazioni.</List.Item>
                <List.Item>Servizio e preparazione tavoli.</List.Item>
              </List>
            </div>
          }
        />
        <WorkItem
          title="Sviluppatore Web"
          company="iperbooking"
          link="https://www.iperbooking.com/"
          date="Maggio 2019 - Giugno 2019"
          locationlink="https://www.google.com/maps/place/Rimini,+Italy"
          location="Rimini, RN"
          description={
            <div className="justify">
              <List bulleted>
                <List.Item>
                  Primi passi nel mondo dello sviluppo web, imparando il workflow dell'azienda.
                </List.Item>
                <List.Item>
                  Gestione del sito web e del database di una Booking Engine.
                </List.Item>
              </List>
            </div>
          }
        />
      </div>
    </div>
  );
}

export default Work;
