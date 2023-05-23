import { combineReducers } from "redux";

import movieReducer from "./movieReducer";
import favoritesReducer from "./favoritesReducer";

const reducers = combineReducers({
  movieReducer: movieReducer,
  favoritesReducer: favoritesReducer,
});

export default reducers;
