import React from "react";

export default function () {
  const url =
    "https://images.unsplash.com/photo-1495603889488-42d1d66e5523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80";
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
