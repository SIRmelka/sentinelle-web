import React from "react";
import Avatar from "../atoms/Avatar";
import Title from "../atoms/Title";
import Hamburger from "../atoms/Hamburger";
import User from "../molecules/User";
export default function Header() {
  return (
    <header className="navbar bg-primary-content border-primary justify-between">
      <Hamburger />
      <User />
      {/* <Title />
      <Avatar /> */}
    </header>
  );
}
