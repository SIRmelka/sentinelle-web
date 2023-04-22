import React from "react";
import Caroussel from "../../components/organisms/Caroussel";
import Summary from "../../components/organisms/Summary";

export default function Home() {
  return (
    <div className="home">
      <p>asasdaksdd</p>
      <div className="main-layout flex flex-row flex-wrap">
        <div className="caroussel-container">
          <Caroussel />
        </div>
        <div className="summary-container">
          <Summary />
        </div>
      </div>
    </div>
  );
}
