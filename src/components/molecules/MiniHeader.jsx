import React from "react";
import Title from "../atoms/Title";
import Button from "../atoms/Button";
export default function MiniHeader({ label }) {
  return (
    <div className="mini-header">
      <Title size={"sm"} label={label} weight={"font-bold"} />
      <Button className={"outlined-btn"} />
    </div>
  );
}
