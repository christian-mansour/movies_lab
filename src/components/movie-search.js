import React from 'react';

class MovieSearch extends React.Component {

 constructor(props) {
    super(props);
  }

  _handleSearch(evt) {
    evt.preventDefault();
    this.props.search(this.refs.movieSearch.value);
  }

  _changeBackground() {
     document.body.background = "http://i.giphy.com/xTiTnoHt2NwerFMsCI.gif";
     document.getElementById("one").style.color = "#fff";
     document.getElementById("two").style.color = "#fff";
     document.getElementById("three").style.color = "#fff";
     document.getElementById("four").style.color = "#fff";
     document.getElementById("five").style.color = "#fff";
     document.getElementById("six").style.color = "#fff";
     var x = document.getElementById("myAudio");
     x.play();
  }

  render() {
    return (
      <form onSubmit={this._handleSearch.bind(this)} >
        <input ref="movieSearch" type="search" placeholder="Search for a movie" />
        <input type="submit" value="search" onClick={this._changeBackground.bind(this)} />
      </form>
    );
  }

}




export default MovieSearch;
