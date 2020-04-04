import React, { Component } from 'react'
import Band from './Band'

class Bands extends Component {
  constructor(props) {
    super(props)
  }

  renderbands() {
    return this.props.bands.map(band => <Band id={band.id} band={band.name} deleteBand={this.props.deleteBand} />)
  }

  
  render() {
    return (
      <div>
        {this.renderbands()}
      </div>
    )
  }
}

export default Bands;