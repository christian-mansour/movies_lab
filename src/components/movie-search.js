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
        <form onSubmit={this._handleSearch.bind(this)} >
          <input type="search" ref="movieSearch" placeholder="Search for a movie" />
          <input type="submit" value="search" />
        </form>
      );
    }
  }



export default MovieSearch;
