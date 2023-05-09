import { CREATE_FILM, FETCHED_FILM } from "./types";

const initialState = {
  myFilms: [],
  fetchedFilms: [],
};

export const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_FILM:
      return { ...state, myFilms: [...state.myFilms, action.payload] };
    case FETCHED_FILM:
      return { ...state, fetchedFilms: action.payload };
    default:
      return state;
  }
};
