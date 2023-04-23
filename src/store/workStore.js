import axios from "axios";
import { create } from "zustand";

export const workStore = create((set) => ({
  works: [],
  getWorks: async () => {
    const workList = await axios
      .get(`${process.env.NEXT_PUBLIC_API}work`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6IjA5OTk5MDgwOSIsImlhdCI6MTY4MDM1ODQ5NX0.NsSLB_JGjpGQ2bE4oO8QteNlo4-qo-B-Wwx1uwdECEc`,
        },
      })
      .catch((e) => {
        console.log(e);
      });
    set({ works: workList.data });
  },
}));
