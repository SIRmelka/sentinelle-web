import React from "react";
import Title from "../atoms/Title";
import ResumeBox from "../atoms/ResumeBox";
import Button from "../atoms/Button";

export default function StatutStudent() {
  return (
    <div className="statut-student">
      <div className="statut-student-container">
        <div className="statut-header">
          <Title size={"sm"} label="Status de l'élève" weight={"font-bold"} />
          <Button className={"outlined-btn"} />
        </div>
        <div className="content">
          <div className="picture"></div>
          <div className="resume">
            <ResumeBox />
            <ResumeBox />
            <ResumeBox />
            <ResumeBox />
          </div>
        </div>
      </div>
    </div>
  );
}
