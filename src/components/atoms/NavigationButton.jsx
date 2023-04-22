import React from "react";
import { AiFillHome } from "react-icons/ai";

export default function NavigationButton({ icon, selected }) {
  return (
    <div className={`navigationButton ${selected && "selected"}`}>
      {icon}
      <p className="test">Home</p>
    </div>
  );
}
