import React, { Component } from 'react';

class Band extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {id, band, deleteBand} = this.props
    return(
      <li>
        <p>{band}</p>
        <button onClick={()=> deleteBand(id)}>DELETE</button>
      </li>
    );
  }
};

export default Band;
