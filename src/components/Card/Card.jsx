import React from "react";
import "./Card.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Card = ({ character, handleFavorite, removeFavorite, state }) => {
  const checkFavorite = state.favorites.includes(character);

  return (
    <div className="card">
      <h2 className="card-title">{character.name}</h2>
      <span>
        {!!checkFavorite ? (
          <FavoriteIcon onClick={removeFavorite} className="fav-icon" />
        ) : (
          <FavoriteBorderOutlinedIcon
            onClick={handleFavorite}
            className="nofav-icon"
          />
        )}
      </span>
      <img className="card-img" src={character.image} />
      <div className="card-info">
        <p>Status: {character.status}</p>
        <p>Location: {character.location.name}</p>
        <p>Gender: {character.gender}</p>
      </div>
    </div>
  );
};

export { Card };
