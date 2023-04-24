import axios from "axios";
import { create } from "zustand";

export const userStore = create((set) => ({
  user: {
    name: false,
    class: "",
    profile: "",
    status: {
      //   moyenne: 80,
      //   absences: 4,
      //   force: "Français",
      //   faiblesse: "Anglais",
    },
  },
  login: async (user, throwError, logUser) => {
    const newUser = await axios
      .post(`${process.env.NEXT_PUBLIC_API}auth/signin`, user, {
        headers: {
          Access-Control-Allow-Origin: "*",
          Authorization: `Bearer `,
          
        },
      })
      .then((e) => {
        localStorage.setItem("userId", e.data.data.userInfo._id);
        logUser(e);
      })
      .catch((e) => {
        console.log(e);
        try {
          switch (e.response.data.message) {
            case "User not found":
              throwError("Numéro de téléphone ou mot de passe incorect");
              break;
            case "incorect password":
              throwError("Numéro de téléphone ou mot de passe incorect");
              break;

            default:
              throwError(
                "un problème est survenu, vérifiez votre connexion internet"
              );
          }
        } catch (e) {
          throwError(
            "un problème est survenu, vérifiez votre connexion internet"
          );
        }
      });
    try {
      newUser.success && logUser();
    } catch (e) {
      console.log(e, newUser);
    }
  },
  getUser: async () => {
    const userInfo = await axios
      .get(`${process.env.NEXT_PUBLIC_API}student/as`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6IjA5OTk5MDgwOSIsImlhdCI6MTY4MDM1ODQ5NX0.NsSLB_JGjpGQ2bE4oO8QteNlo4-qo-B-Wwx1uwdECEc`,
        },
      })
      .catch((e) => {
        console.log(e);
      });
    set({ user: userInfo.data });
  },
}));
