import React from "react";

export default function NavigationButton({ label, icon, selected }) {
  return (
    <div className={`navigationButton ${selected && "selected"}`}>
      {icon}
      <p className="test">{label}</p>
    </div>
  );
}
