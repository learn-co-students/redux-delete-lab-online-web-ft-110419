import React, { Component } from "react";

class Band extends Component {
  render() {
    const { band, deleteBand } = this.props;
    return (
      <li>
        {band.name}
        <button onClick={() => deleteBand(band.id)}> Delete </button>
      </li>
    );
  }
}

export default Band;
