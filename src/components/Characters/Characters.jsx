import React, { useState, useEffect } from "react";
import { Card } from "../index";
import './Characters.css';

const URL_API = "https://rickandmortyapi.com/api/character";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(URL_API);
      const data = await res.json();
      setCharacters(data.results);
    };
    fetchData();
  }, []);
  return (
    <div className="Characters">
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
};

export { Characters };
