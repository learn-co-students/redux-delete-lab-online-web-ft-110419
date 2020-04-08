import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <li>
        <span>{this.props.band.name}   </span>
        <button onClick = {() => this.props.deletes(this.props.band.id)}>Delete Band</button>
      </li>
    );
  }
};

export default Band;
