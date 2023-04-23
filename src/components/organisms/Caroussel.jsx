import React, { useEffect, useState } from "react";
import Button from "../atoms/Button";
import { communiqueStore } from "../../store/communiqueStore";
export default function Caroussel() {
  const communications = communiqueStore((state) => state.communications);
  console.log(communications);
  const [activeCommunication, setActiveCommunication] = useState(0);

  console.log(activeCommunication);
  return (
    <div className="caroussel">
      <div
        className="caroussel-item"
        style={{
          backgroundImage: `url(${communications[activeCommunication].cover})`,
        }}
      ></div>
      <div className="caroussel-inner">
        <h2 className="font-bold text-xl my-3">
          {communications[activeCommunication].title}
        </h2>
        <p>{communications[activeCommunication].content}</p>
      </div>

      <span className="caroussel-controllers">
        <div className="dots">
          <span className="dot dot-active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <Button className={"main-btn"} />
      </span>
    </div>
  );
}
