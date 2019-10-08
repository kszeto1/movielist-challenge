import React from 'react';

const PopularMovieList = (props) => {
  return (
    props.popularMovies.map(movie => {
      return (
        <div>
          <span>{movie[0]}</span>
          <img src={`https://image.tmdb.org/t/p/w500/${movie[2]}`} width='100px' height='100px' />
          <span>{movie[1]}</span>
          <span>{movie[3]}</span>
        </div>
      )
    })
  );
}

export default PopularMovieList;