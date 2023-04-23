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
        <NavigationButton icon={<IoHomeOutline />} selected={true} />
        <NavigationButton icon={<HiOutlineNewspaper />} />
        <NavigationButton icon={<GiBookshelf />} />
        <NavigationButton icon={<FaRegUserCircle />} />
      </div>
    </div>
  );
}
