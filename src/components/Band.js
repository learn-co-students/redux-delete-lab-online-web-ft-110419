import React, { Component } from 'react';
class Band extends Component {
  render() {
    return (
      <div>
        <li>{console.log(this.props)}</li>
        <button>DELETE</button>
      </div>
    );
  }
};

export default Band;
