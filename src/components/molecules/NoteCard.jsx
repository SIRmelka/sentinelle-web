import React from "react";
import Title from "../atoms/Title";
import icon from "../../assets/images/quizz.png";
import { Result } from "postcss";

export default function NoteCard({ label, cours, description, result, date }) {
  return (
    <div className="note-card">
      <div className="note-header">
        <div className="note-header-info">
          <Title
            size={"md"}
            label={label}
            weight={"font-bold"}
            color={"primary-color"}
          />
          <p>{cours}</p>
        </div>
        <div className="note-header-icon">
          <img
            src={`./assets/images/${
              label == "intero" ? quizz.png : "homework.png"
            }`}
          />
        </div>
      </div>
      <div className="note-description">
        <p>{description}</p>
      </div>
      <div className="note-footer">
        <div className="note-value">{result}</div>
        <div className="note-date">
          <p className="font-bold">{date}</p>
        </div>
      </div>
    </div>
  );
}
