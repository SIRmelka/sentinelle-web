import React from "react";
import Title from "../atoms/Title";
import Button from "../atoms/Button";
export default function MiniHeader() {
  return (
    <div className="mini-header">
      <Title size={"sm"} label="Derniers travaux" weight={"font-bold"} />
      <Button className={"outlined-btn"} />
    </div>
  );
}
