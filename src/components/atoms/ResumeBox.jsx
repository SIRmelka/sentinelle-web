import React from "react";

export default function ResumeBox({ title, note, success }) {
  return (
    <div className="resume-box">
      <h3 className="font-semibold">{title}</h3>
      <p
        className="font-bold"
        style={!success ? style.redText : style.blueText}
      >
        {note}
      </p>
    </div>
  );
}
const style = {
  redText: {
    color: "#F1441E",
  },
  blueText: {
    color: "#1EAAF1",
  },
};
