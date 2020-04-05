import React, { Component } from 'react'
import BandInput from './BandInput';
import Bands from './Bands';
import { connect } from 'react-redux'


//Use BandsContainer to access the Redux store that contains any band information using the provided mapStateToProps method. Pass these bands into the Bands component.

//state should be sent to Bands component as props

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        {/* Bands component needs to pull from map state to props */}
        <Bands bands={this.props.bands} deleteBand={this.props.deleteBand} />
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: id => dispatch({type: 'DELETE_BAND', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
