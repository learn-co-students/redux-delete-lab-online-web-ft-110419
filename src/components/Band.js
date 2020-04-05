import React, { Component } from 'react';

class Band extends Component {

  // handleDeleteClick = () => {
  //   console.log(this)
  //   console.log(this.props)
  //   debugger
  //   // deleteBand
  // }

  render() {
    console.log(this.props)
    debugger
    const {band, deleteBand } = this.props 
    
    return(
      <div>
        <li id={band.id}>
          {band.name.bandName}
          <button onClick={() => deleteBand(band.id)}>Delete</button>
          </li>
      </div>
    );
  }
};

export default Band;
