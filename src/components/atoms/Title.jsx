import React from "react";

export default function Title({ label, size, weight }) {
  return (
    <div>
      <h1 className={`text-${size} ${weight} px-2`}>{label}</h1>
    </div>
  );
}
