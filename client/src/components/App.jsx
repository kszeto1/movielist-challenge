import React, { Component } from 'react';
import axios from 'axios';
import PopularMovieList from './PopularMovieList.jsx';
import SearchBar from './SearchBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popularMovies: [],
    };

    this.handleMostPopularMovies = this.handleMostPopularMovies.bind(this);
  }

  componentDidMount() {
    axios.get('/movies')
      .then((result) => {
        console.log('componentDidMount', result.data.results);
        this.handleMostPopularMovies(result.data.results);

      })
  }

  handleMostPopularMovies(moviesObj) {
    const popularMovies = moviesObj.map(movie => [
      moviesObj.indexOf(movie),
      movie.original_title,
      movie.poster_path,
      movie.vote_average 
    ]
    );

    this.setState({ popularMovies });
  }
  render() {
    console.log('state', this.state.popularMovies);
    const { popularMovies } = this.state;
    return (
      <div>
        <SearchBar />
        <PopularMovieList popularMovies={popularMovies}/>
      </div>
    );
  }
}

export default App;