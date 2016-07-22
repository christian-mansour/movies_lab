import React from 'react';

class MovieSearch extends React.Component {

 constructor(props) {
    super(props);
  }

  _handleSearch(evt) {
    evt.preventDefault();
    this.props.search(this.refs.movieSearch.value);
  }

  render() {
    return (
      <form onSubmit={this._handleSearch.bind(this)}>
        <input ref="movieSearch" type="search" placeholder="Search for a movie" />
        <input type="submit" value="Search" />
      </form>
    );
  }

}




export default MovieSearch;
