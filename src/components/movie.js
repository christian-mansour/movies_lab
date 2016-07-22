import React from 'react';


class Movie extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <h3>{ this.props.movie }</h3>
      </div>
    );
  }

}



export default Movie;
