import React from 'react';
import 'whatwg-fetch';
import MovieSearch from './movie-search';
import Movie from './movie';

class MovieContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movie: {}
    }
  }



  render() {
    return (
      <div>
        Movie Container works!
      </div>
    );
  }
}



export default MovieContainer;
