import React from 'react';

const PopularMovieList = (props) => {
  return (
    props.popularMovies.map(movie => {
      return (
        <div key={movie[0]}>
          <span>{movie[0]}</span>
          <img src={`https://image.tmdb.org/t/p/w500/${movie[2]}`} width='100px' height='100px' />
          <span>{movie[1]}</span>
          <img src={'https://movie-list-kszeto.s3-us-west-1.amazonaws.com/star.jpg'} width='20px'/>
          <span>{movie[3]}</span>
        </div>
      )
    })
  );
}

export default PopularMovieList;