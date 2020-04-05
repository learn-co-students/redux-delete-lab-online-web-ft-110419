import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <li>{this.state.bandName}</li>
      </div>
    );
  }
};

export default Band;
