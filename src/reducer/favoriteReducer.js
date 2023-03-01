import { ACTIONS } from "./index";

const favoriteReducer = (state, action) => {
  const check = state.favorites.includes(action.payload);
  switch (action.type) {
    case ACTIONS.ADD_TO_FAVORITE:
      if (!check) {
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      }
    case ACTIONS.REMOVE_FROM_FAVORITE:
      if (check) {
        return {
          ...state,
          favorites: state.favorites.filter((item) => item !== action.payload),
        };
      }
    default:
      return state;
  }
};

export { favoriteReducer };
