import React from "react";
import Title from "../atoms/Title";
import Avatar from "../atoms/Avatar";

export default function User() {
  return (
    <div className="user items-center justify-items-center justify-end ">
      <div className="user-info">
        <div className="user-info-name">
          <Title
            size={"lg"}
            weight={"font-semibold"}
            label={"Lokako"}
            color={"text-white"}
          />
        </div>
        <div className="user-info-class">
          <Title size={"xs"} label={"2em primaire"} color={"text-white"} />
        </div>
      </div>
      <div className="user-avatar">
        <Avatar />
      </div>
    </div>
  );
}
