import React from "react";
import Caroussel from "../../components/organisms/Caroussel";
import Summary from "../../components/organisms/Summary";
import NoteCard from "../../components/molecules/NoteCard";
import MiniHeader from "../../components/molecules/MiniHeader";
import SideBar from "../../components/molecules/SideBar";
import RessourceCard from "../../components/molecules/RessourceCard";

export default function Home() {
  return (
    <div className="home flex">
      <SideBar />
      <div>
        <div className="main-layout flex flex-row flex-wrap">
          <div className="caroussel-container">
            <Caroussel />
          </div>
          <div className="summary-container">
            <Summary />
          </div>
        </div>
        <div className="other-data flex-row flex-wrap">
          <div className="ressources">
            <div className="ressources-card">
              <RessourceCard
                background={
                  "https://m.media-amazon.com/images/I/610RsJK5jlL._AC_UF1000,1000_QL80_.jpg"
                }
              />
              <RessourceCard
                background={
                  "https://www.cahiers-pedagogiques.com/wp-content/uploads/2019/09/arton12217.jpg"
                }
              />
              <RessourceCard
                background={
                  "https://librairiespaulines.com/wp-content/uploads/2020/09/Math-3.jpg"
                }
              />
              <RessourceCard
                background={
                  "https://www.editions-hatier.fr/sites/default/files/couvertures/couverture_8588402.jpg"
                }
              />
            </div>
            <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
              Publicité
            </p>
            <div className="add">asd</div>
          </div>
          <div className="notes">
            <MiniHeader />
            <div className="notes-card">
              <NoteCard />
              <NoteCard />
              <NoteCard />
              <NoteCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
