import React from "react";
import Title from "../atoms/Title";
import icon from "../../assets/images/quizz.png";
import Button from "../atoms/Button";

export default function RessourceCard({ background, name, price }) {
  return (
    <div className="ressource-card">
      <div
        className="ressource-banner"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className="ressource-info">
        <h2>Math</h2>
        <p>Livre</p>
      </div>
      <div className="ressource-footer">
        <Button className={"sm-main-btn"} />
        <p>Gratuit</p>
      </div>
    </div>
  );
}
