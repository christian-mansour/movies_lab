import React from 'react';
import 'whatwg-fetch';
import MovieSearch from './movie-search';
import Movie from './movie';

class MovieContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { movie: {} };
  }

  _fetchMovie(searchTerm) {

    fetch(`//www.omdbapi.com/?t=${searchTerm}&y=&plot=short&r=json`)
      .then((response) => {
        return response.json()
      })
      .then((results) => {
        console.log(results)
        this.setState = {
          movie: results
        }
      })
      .catch((ex) => {
        console.log('parsing failed', ex)
      })
  }


  render() {
    return (
      <div>
        <MovieSearch search={this._fetchMovie.bind(this)}/>
        <Movie/>
      </div>
    );
  }

}















export default MovieContainer;
