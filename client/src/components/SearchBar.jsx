import React from 'react';

const SearchBar = (props) => {
  const handleChange = (event) => {
    const { handleSearch } = props;
    handleSearch(event.target.value);
  };

  return(
  <form action="" method="get" className="search-bar" onSubmit={props.handleSubmit}>
    <div className="search">
      <label htmlFor="search">Search: </label>
      <input type="text" id="search-input-field" placeholder="Search popular movies" value={props.value} onChange={handleChange} required />
    </div>
  </form>
  );
}

export default SearchBar;