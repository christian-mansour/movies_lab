import React from 'react';


class Movie extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <h3 id="five"> {this.props.result.Title} </h3>
        <ul>
          <li id="one">Genre: {this.props.result.Genre}</li>
          <li id="two">Actors: {this.props.result.Actors}</li>
          <li id="three">Release Date: {this.props.result.Released}</li>
          <li id="four">Imdb Rating: {this.props.result.imdbRating}/10</li>
        </ul>
      </div>
    );
  }

}



export default Movie;
