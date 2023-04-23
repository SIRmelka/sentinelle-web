import React, { useEffect } from "react";
import Title from "../atoms/Title";
import ResumeBox from "../atoms/ResumeBox";
import Button from "../atoms/Button";
import { userStore } from "../../store/userStore";

export default function StatutStudent() {
  const [user, getUser] = userStore((state) => [state.user, state.getUser]);

  console.log(user);
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="statut-student">
      <div className="statut-student-container">
        <div className="statut-header">
          <Title size={"sm"} label="Status de l'élève" weight={"font-bold"} />
          <Button className={"outlined-btn"} />
        </div>
        <div className="content">
          <div className="picture"></div>
          <div className="resume">
            <ResumeBox
              title={"Moyenne"}
              success={user.status && user.status.moyenne >= 55 ? true : false}
              note={user.status.moyenne + "%"}
            />
            <ResumeBox
              title={"Absences"}
              success={user.status && user.status.absences < 3 ? true : false}
              note={user.status.absences}
            />
            <ResumeBox
              title={"Force"}
              success={true}
              note={user.status && user.status.force}
            />
            <ResumeBox
              title={"Faiblesse"}
              success={false}
              note={user.status && user.status.faiblesse}
            />
          </div>
        </div>
        <p style={{ fontWeight: "bold", marginBottom: "10px" }}>Publicité</p>
        <div className="add"></div>
      </div>
    </div>
  );
}
