import React from "react";
import MiniHeader from "../molecules/MiniHeader";
import NoteCard from "../molecules/NoteCard";
import StatutStudent from "./StatutStudent";

export default function Summary() {
  return (
    <div className="summary">
      <StatutStudent />
      <MiniHeader />
      <div className="notes">
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </div>
  );
}
