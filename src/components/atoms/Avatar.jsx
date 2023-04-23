import React from "react";

export default function ({ background }) {
  const url = background;
  return (
    <div>
      <div className="avatar self-center ju">
        <div className="w-10  rounded-full avatar-picture">
          <img src={url} />
        </div>
      </div>
    </div>
  );
}
