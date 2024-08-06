// components/Search.jsx
import React from 'react';

const SearchBar = ({ query, onQueryChange }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={e => onQueryChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;