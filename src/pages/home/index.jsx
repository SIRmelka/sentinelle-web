import React, { useEffect, useState } from "react";
import Caroussel from "../../components/organisms/Caroussel";
import Summary from "../../components/organisms/Summary";
import NoteCard from "../../components/molecules/NoteCard";
import MiniHeader from "../../components/molecules/MiniHeader";
import SideBar from "../../components/molecules/SideBar";
import RessourceCard from "../../components/molecules/RessourceCard";
import { workStore } from "../../store/workStore";
import { ressourceStore } from "../../store/ressourceStore";
import Header from "../../components/organisms/Header";
import MainLoader from "../../components/organisms/MainLoader";

export default function Home() {
  const [works, getWorks] = workStore((state) => [state.works, state.getWorks]);
  const [ressources, getRessources] = ressourceStore((state) => [
    state.ressources,
    state.getRessources,
  ]);
  const [loading, setLoadig] = useState(true);

  useEffect(() => {
    localStorage.getItem("userId")
      ? setLoadig(false)
      : window.location.replace(`${process.env.NEXT_PUBLIC_WEB}auth`);
    getRessources();
    getWorks();
  }, []);

  return (
    <>
      {loading && <MainLoader />}
      <Header />
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
                {ressources &&
                  ressources.map((ressource) => {
                    return (
                      <RessourceCard
                        name={ressource.title}
                        type={ressource.type}
                        price={ressource.price}
                        background={ressource.cover}
                      />
                    );
                  })}
              </div>
              <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
                Publicité
              </p>
              <div className="add"></div>
            </div>
            <div className="notes">
              <MiniHeader />
              <div className="notes-card">
                {works.map((work) => {
                  return (
                    <NoteCard
                      label={work.type}
                      cours={work.course}
                      result={work.cote}
                      date={work.date}
                      maxima={work.maxima}
                      description={work.description}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
