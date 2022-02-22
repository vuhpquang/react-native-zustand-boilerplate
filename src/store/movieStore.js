import create from "zustand";
import produce from "immer";

export const useStore = create((set) => ({
  movieList: [
    {
      id: Math.floor(Math.random() * 100),
      name: "River Where the Moon Rises",
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "The Crowned Clown",
    },
  ],
  addMovie: (payload) =>
    set(
      produce((draft) => {
        draft.movieList.push({
          id: Math.floor(Math.random() * 100),
          name: payload,
        });
      })
    ),
  removeMovie: (payload) =>
    set(
      produce((draft) => {
        const movieIndex = draft.movieList.findIndex((el) => el.id === payload);
        draft.movieList.splice(movieIndex, 1);
      })
    ),
  // More mutations will go here
}));