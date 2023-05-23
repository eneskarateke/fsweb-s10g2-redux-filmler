import {
  TOGGLE_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from "../actions/favoritesActions.js";

const initialState = {
  favorites: [],
  displayFavorites: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };
    case ADD_FAVORITE:
      const isMovieAlreadyAdded = state.favorites.find(
        (favorite) => favorite.id === action.payload.id
      );
      if (isMovieAlreadyAdded) {
        alert("film zaten favorilere ekli.");
        return state;
      } else {
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      }
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => action.payload !== item.id),
      };
    default:
      return state;
  }
};

export default reducer;
