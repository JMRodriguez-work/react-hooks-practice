import React, { useState, useEffect, useReducer, useMemo, useRef } from "react";
import { favoriteReducer, initialState, ACTIONS } from "../../reducer/index";
import { Card } from "../index";
import "./Characters.css";

const URL_API = "https://rickandmortyapi.com/api/character";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [state, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

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

  const handleSearch = () => {
    setSearch(searchInput.current.value);
  };

  const filteredCharacters = useMemo(() => 
    characters.filter((character) => character.name.toLowerCase().includes(search.toLowerCase())) 
  , [characters, search])

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
      <div className="searchbar">
        <input
          ref={searchInput}
          className="input__searchbar"
          value={search}
          type="search"
          placeholder="Search a character"
          onChange={(e) => handleSearch(e)}
        />
      </div>
      <div className="Characters">
        {filteredCharacters.map((character) => (
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
