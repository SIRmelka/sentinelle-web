import React from "react";
import Title from "../atoms/Title";
import icon from "../../assets/images/quizz.png";

export default function NoteCard() {
  return (
    <div className="note-card">
      <div className="note-header">
        <div className="note-header-info">
          <Title
            size={"md"}
            label={"Dévoir"}
            weight={"font-bold"}
            color={"primary-color"}
          />
          <p>Histoire</p>
        </div>
        <div className="note-header-icon">
          <img src="./assets/images/quizz.png" />
        </div>
      </div>
      <div className="note-description">
        <p> Les pays limitrophes de la RDC et leurs capitales</p>
      </div>
      <div className="note-footer">
        <div className="note-value">2/10</div>
        <div className="note-date">
          <p className="font-bold">16/10/2011</p>
        </div>
      </div>
    </div>
  );
}
