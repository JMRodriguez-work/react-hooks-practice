import ACTIONS from './actions';

const favoriteReducer = (state, action) => {
    switch(action.type) {
      case ACTIONS.ADD_TO_FAVORITE:
        return {
          ...state,
          favorites: [...state.favorites, action.payload]
        }
      default:
        return state;
    }
  }

  export default favoriteReducer;