import { useState, useEffect } from "react";


const useCharacters = (URL) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const res = await fetch(URL);
        const data = await res.json();
        setCharacters(data.results);
    };
    fetchData();
  }, [URL]);

  return {
    characters
  }
};

export { useCharacters };
