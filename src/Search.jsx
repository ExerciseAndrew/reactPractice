import React from 'react';

function Search ({ filterFunction, list = [] }) {
  const [q, setQ] = React.useState('');

  const handleSearch = (q) => {
    filterFunction(q);
  }

  return(
    <div className= "search-wrapper">
      <input
        type="search"
        name="search-form"
        id="search-form"
        className="search-input"
        placeholder="Search for..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <button type="submit" onClick={handleSearch}>Search</button>
    </div>

  )
}

export default Search;