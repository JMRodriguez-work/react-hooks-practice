import React from "react";
import "./Card.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";

const Card = ({ character }) => {
  const checkStatus = () => {
    if (character.status === "dead") {
      return <HeartBrokenIcon />;
    } else {
      return <FavoriteIcon />;
    }
  };
  return (
    <div className="card">
      <h2 className="card-title">{character.name}</h2>
      <img className="card-img" src={character.image} />
      <div className="card-info">
        <p>
          Status
          {character.status === "Dead" ? (
            <HeartBrokenIcon className="dead" />
          ) : (
            <FavoriteIcon
              className={character.status === "Alive" ? "alive" : "unknown"}
            />
          )}
        </p>
        <p>Location: {character.location.name}</p>
        <p>Gender: {character.gender}</p>
      </div>
    </div>
  );
};

export { Card };
