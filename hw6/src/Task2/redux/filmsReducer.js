import { CREATE_FILM, FETCHED_FILM } from "./types";

const initialState = {
  films: [],
  fetchedFilms: [],
};

export const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_FILM:
      return { ...state, films: [...state.films, action.payload] };
    case FETCHED_FILM:
      return { ...state, fetchedFilms: action.payload };
    default:
      return state;
  }
};
