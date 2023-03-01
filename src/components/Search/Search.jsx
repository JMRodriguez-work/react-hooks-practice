import React from "react";
import "./Search.css";

const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <div className="searchbar">
      <input
        ref={searchInput}
        className="input__searchbar"
        value={search}
        type="search"
        placeholder="Search a character"
        onChange={handleSearch}
      />
    </div>
  );
};

export { Search };
