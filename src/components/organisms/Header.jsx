import React from "react";
import Avatar from "../atoms/Avatar";
import Title from "../atoms/Title";
import Hamburger from "../atoms/Hamburger";
import User from "../molecules/User";
export default function Header() {
  return (
    <header className="navbar bg-primary-content border-primary justify-between">
      <Hamburger />
      {/* <div style={}>
        <input
          type="text"
          placeholder="Rechercher un communiqué"
          className="input input-bordered w-full max-w-xs bg-white"
        />
      </div> */}

      <User />
      {/* <Title />
      <Avatar /> */}
    </header>
  );
}
