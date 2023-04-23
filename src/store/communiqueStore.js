import { create } from "zustand";

export const communiqueStore = create((set) => ({
  communications: [
    {
      title: "Réprise des cours",
      content:
        "ce lundi 12 juin, les cours reprennent enfi après une intéruption survenue hier...",
      cover:
        "https://media.istockphoto.com/id/803141126/photo/kids-showing-hands-during-a-lesson-at-an-elementary-school.jpg?s=612x612&w=0&k=20&c=3zQbkU2Ha9JZ6FFYxz6k5PNcSxqIflmGorR8yOcDsRY=",
    },
    {
      title: "Excursion",
      content:
        "chers parents, la direction vous informe que les élèves iront en excursion ce samedi 12/03/2023 à kinkole...",
      cover:
        "https://rs.projects-abroad.org/v1/hero/product-5d52a6ffeac4e.[1600].jpeg?s=612x612&w=0&k=20&c=3zQbkU2Ha9JZ6FFYxz6k5PNcSxqIflmGorR8yOcDsRY=",
    },
    {
      tile: "tournois interscolaire inter scolaire",
      content:
        "les élèves de 6eme primmaitre vont participer dans l'après midi de ce vendredi à un match...",
      cover:
        "https://i.pinimg.com/originals/37/10/53/37105380ff8fa716fbd8f9f521e21bc9.jpg",
    },
  ],
}));
