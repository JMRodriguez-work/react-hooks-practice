import React, { useState, useEffect, useReducer } from "react";
import { Card } from "../index";
import "./Characters.css";

const URL_API = "https://rickandmortyapi.com/api/character";

const initialState = {
  favorites: [],
};

const ACTIONS = {
  ADD_TO_FAVORITE: "ADD_TO_FAVORITE",
  REMOVE_FROM_FAVORITE: "REMOVE_FROM_FAVORITE",
};

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

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [state, dispatch] = useReducer(favoriteReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(URL_API);
      const data = await res.json();
      setCharacters(data.results);
    };
    fetchData();
  }, []);

  const handleFavorite = (favorite) => {
    dispatch({
      type: ACTIONS.ADD_TO_FAVORITE,
      payload: favorite,
    });
  };

  const removeFavorite = (favorite) => {
    dispatch({
      type: ACTIONS.REMOVE_FROM_FAVORITE,
      payload: favorite,
    });
  };

  return (
    <div className="wrapper">
      <div className="myfavorites">
        <h2 className="fav-title">Favorites</h2>
        <div className="fav-wrapper">
          {state.favorites.map((favorite) => (
            <img className="fav-img" key={favorite.id} src={favorite.image} />
          ))}
        </div>
      </div>
      <div className="Characters">
        {characters.map((character) => (
          <Card
            key={character.id}
            character={character}
            handleFavorite={() => handleFavorite(character)}
            removeFavorite={() => removeFavorite(character)}
            state={state}
          />
        ))}
      </div>
    </div>
  );
};

export { Characters };
