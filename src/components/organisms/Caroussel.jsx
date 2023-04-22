import React, { useState } from "react";
import { Carousel } from "@mantine/carousel";
import Button from "../atoms/Button";

export default function Caroussel() {
  return (
    <div className="caroussel">
      <div
        className="caroussel-item"
        style={{ backgroundImage: "url('./assets/images/banner.png')" }}
      ></div>
      <div className="caroussel-inner">
        <h2 className="font-bold text-xl my-3">Rentrée scolaire confirmée</h2>
        <p>
          ce matin à 12h tous les élèves devront participer aux débuts des cours
          et doivent en meme temps...
        </p>
        <span className="caroussel-controllers">
          <div className="dots">
            <span className="dot dot-active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <Button className={"main-btn"} />
        </span>
      </div>
    </div>
  );
}
