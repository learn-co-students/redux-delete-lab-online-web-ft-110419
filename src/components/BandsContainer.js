import React, { Component } from 'react'
import BandInput from './BandInput';
import Bands from './Bands';

export default class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput />
        <Bands />
      </div>
    )
  }
}

// const mapStateToProps = ({ bands }) => ({ bands })

// const mapDispatchToProps = dispatch => ({
//   addBand: name => dispatch({ type: "ADD_BAND", name }),
//   deleteBand: bandId => dispatch({type: "DELETE_BAND", id: bandId})
// })
