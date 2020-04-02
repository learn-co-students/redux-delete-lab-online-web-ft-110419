import React, { Component } from 'react';
import Band from './Band';


class Bands extends Component {

  render() {
    return(
        <ul>
            {this.props.bands.map(band => <div key={band.id}><Band band={band} delete={this.props.delete}/></div>)}
        </ul>
    );
  }
};

export default Bands;