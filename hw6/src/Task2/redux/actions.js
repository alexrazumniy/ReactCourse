import { CREATE_FILM } from "./types";

export function createFilm(film) {
  return {
    type: CREATE_FILM,
    payload: film,
  };
}
