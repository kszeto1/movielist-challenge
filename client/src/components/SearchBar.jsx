import React from 'react';

const SearchBar = (props) => {
  return(
  <form action="" method="get" class="search-bar">
    <div class="search">
      <label for="search">Search: </label>
      <input type="text" id="search-input-field" placeholder="Search popular movies" required />
    </div>
  </form>
  );
}

export default SearchBar;