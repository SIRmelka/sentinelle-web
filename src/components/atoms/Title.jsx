import React from "react";

export default function Title({ label, size, weight, color }) {
  return (
    <div>
      <h1 className={`text-${size} ${weight} px-2 ${color} `}>{label}</h1>
    </div>
  );
}
