import { List } from "semantic-ui-react";
import WorkItem from "./workitem_IT.js";

function Projects() {
  return (
    <div className="projects">
      <div className="title-projects">PROGETTI</div>
      <hr />
      <div className="projects-content">
      <WorkItem
          title="Studente di Informatica"
          company="Università di Milano - Bicocca"
          link="https://www.unimib.it/"
          date={
            <div>
              Settembre 2020 -
              <span style={{ fontWeight: "600" }}> presente</span>
            </div>
          }
          locationlink="https://www.google.com/maps/place/Milan,+Italy"
          location="Milano, MI"
          description={
            <div>
              <List bulleted>
                <List.Item>
                  <span className="justify">
                    <span style={{ fontWeight: "600" }}>
                      Progetto di Sistemi Distribuiti:{" "}
                    </span>
                    <span style={{}}>
                      Sviluppato il lato front-end di un sito web costruito con
                      Python Flask. Gestito i dati che provenivano dal server
                      (con REST API) e le comunicazioni frontend-backend.
                      Utilizzo di GitHub come Version Control.{" "}
                    </span>
                  </span>
                </List.Item>
                <List.Item>
                  <span className="justify">
                    <span style={{ fontWeight: "600" }}>
                      Progetto di Programmazione di Dispositivi Mobili:{" "}
                    </span>
                    Sviluppato, gestito e diretto lo sviluppo front-end di
                    un'applicatione Android in un team di 4 persone. Ottimo
                    utilizzo e approfondimento di Android Studio (Java), GitHub
                    (Pull Requests, Issues, Merge conflicts).
                  </span>
                </List.Item>
              </List>
            </div>
          }
        />
        <WorkItem
          title="Sviluppatore Front-End"
          company="Frontend Mentor"
          link="https://www.frontendmentor.io/profile/yangxdev"
          date={
            <div>
              Aprile 2022 -<span style={{ fontWeight: "600" }}> presente</span>
            </div>
          }
          locationlink="https://www.google.com/maps/place/Milan,+Italy"
          location="Rimini, RN & Milano, MI"
          description={
            <div className="justify">
              <List bulleted>
                <List.Item>
                  Sviluppato
                  <span style={{ fontWeight: "bold" }}>
                    {" "}
                    10+ progetti di front-end{" "}
                  </span>
                  partendo con Vanilla JS, attualmente utilzzando React.
                </List.Item>
              </List>
            </div>
          }
        />
        <WorkItem
          title="Pianista"
          company="Instagram"
          link="https://www.instagram.com/yang.xng/"
          date="Marzo 2021 - Ottobre 2021"
          locationlink="https://www.google.com/maps/place/Rimini,+Italy"
          location="Rimini, RN"
          description={
            <div className="justify">
              <List bulleted>
                <List.Item>
                  Registrato audio e video di alta qualità di me stesso suonare
                  il pianoforte, utilizzando una fotocamera reflex.
                </List.Item>
                <List.Item>
                  Vasta conoscenza di
                  <span style={{ fontWeight: "bold" }}>
                    {" "}
                    registrazione ed editing audio e video{" "}
                  </span>
                  (Premiere Pro, After Effects, FL Studio, Ableton Live).
                </List.Item>
                <List.Item>
                  Ottenuto
                  <span style={{ fontWeight: "bold" }}>
                    {" "}
                    40000+ visualizzazioni e 8500+ mi piace{" "}
                  </span>
                  su 20+ video musicali, connettendo con musicisti e followers
                  da ogni parte del mondo.
                </List.Item>
                <List.Item>
                  Prodotto collaborazioni video con una pianista e violinista
                  canadese, utilizzando tecniche di team-working online abbinato
                  ad un uso tecnico dell'inglese.
                  <span style={{ fontWeight: "bold" }}> </span>
                </List.Item>
              </List>
            </div>
          }
        />
      </div>
    </div>
  );
}

export default Projects;
