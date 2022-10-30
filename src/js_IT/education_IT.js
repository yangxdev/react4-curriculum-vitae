import Icon from "./unimiblogo_IT.js";
import EducationItem from "./educationitem_IT.js";
import { List } from "semantic-ui-react";

function Education() {
  return (
    <div className="education">
      <div className="title-education">EDUCAZIONE</div>
      <hr />
      <Icon />
      {/* <img src={ittslogo} className="ittslogo" alt="ittslogo"></img> */}
      <EducationItem
        degree="L.T. in Scienze Informatiche"
        field=""
        link="https://www.unimib.it/"
        school="Università degli Studi di Milano - Bicocca"
        date="Sett. 2020 - Luglio 2023"
        locationlink="https://www.google.com/maps/place/Milan,+Italy"
        location="Milano, MI"
        courses={
          <div className="justify">
            <List bulleted>
              <List.Item>Reti e Sistemi Operativi</List.Item>
              <List.Item>Algoritmi e Strutture Dati</List.Item>
              <List.Item>Programmazione di Dispositivi Mobili</List.Item>
              <List.Item>Linguaggi di Programmazione</List.Item>
              <List.Item>Basi di Dati</List.Item>
            </List>
          </div>
        }
      />
      <EducationItem
        degree="Diploma in T. Informatiche"
        field="Tecnologie Informatiche"
        link="https://www.ittsrimini.edu.it/"
        school="ITTS Belluzzi - Da Vinci"
        date="Sett. 2015 - Giugno 2020"
        locationlink="https://www.google.com/maps/place/Rimini,+Italy"
        location="Rimini, RN"
        courses={
          <div className="justify">
            <List bulleted>
              <List.Item>Tecnologie Web</List.Item>
              <List.Item>Sistemi e Reti</List.Item>
            </List>
          </div>
        }
      />
    </div>
  );
}

export default Education;
