import React, { Component } from 'react';
import axios from 'axios';
import PopularMovieList from './PopularMovieList.jsx';
import SearchBar from './SearchBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popularMovies: [],
      filteredMovies: [],
      value: '',
    };

    this.handleMostPopularMovies = this.handleMostPopularMovies.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    axios.get('/movies')
      .then((result) => {
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

    this.setState({ popularMovies, filteredMovies: popularMovies });
  }

  handleSearch(query) {
    const { popularMovies } = this.state;

    const filteredMovies = popularMovies.filter(movie => {
      return (movie[1].toLowerCase().includes(query.toLowerCase()));
    })
    
    this.setState({value: query, filteredMovies});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <SearchBar handleSubmit={this.handleSubmit} handleSearch={this.handleSearch} value={this.state.value}/>
        <PopularMovieList popularMovies={this.state.filteredMovies}/>
      </div>
    );
  }
}

export default App;