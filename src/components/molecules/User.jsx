import React from "react";
import Title from "../atoms/Title";
import Avatar from "../atoms/Avatar";

export default function User({ user }) {
  return (
    <div className="user items-center justify-items-center justify-end ">
      <div className="user-info">
        <div className="user-info-name">
          <Title
            size={"sm"}
            weight={"font-semibold"}
            label={user.name}
            color={"text-white"}
          />
        </div>
        <div className="user-info-class">
          <Title size={"xs"} label={user.class} color={"text-white"} />
        </div>
      </div>
      <div className="user-avatar">
        <Avatar background={user.profile} />
      </div>
    </div>
  );
}
