import React, { Component } from 'react';

class Band extends Component {

  render() {
    const { name, id } = this.props.band
    return (
      <li>
        <span>{name}</span>
        <button onClick={() => this.props.deleteBand(id)}>DELETE</button>
      </li>
    );
  }
};

export default Band;
