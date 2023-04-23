import React from "react";
import NavigationButton from "../atoms/NavigationButton";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineNewspaper } from "react-icons/hi";
import { GiBookshelf } from "react-icons/gi";
import { FaRegUserCircle } from "react-icons/fa";
export default function SideBar() {
  return (
    <div className="sidebar flex items-center">
      <div className="sidebar-box">
        <NavigationButton
          label={"acceuil"}
          icon={<IoHomeOutline />}
          selected={true}
        />
        <NavigationButton label={"communiqués"} icon={<HiOutlineNewspaper />} />
        <NavigationButton label={"Journal"} icon={<GiBookshelf />} />
        <NavigationButton label={"profil"} icon={<FaRegUserCircle />} />
      </div>
    </div>
  );
}
