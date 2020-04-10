import React, { Component } from 'react'
import BandInput from './BandInput';
import Bands from './Bands'
import { connect } from 'react-redux'
import { deleteBand, addBand } from '../action/bandActions'
class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <Bands bands={this.props.bands} deleteBand={this.props.deleteBand} />
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch(addBand(name)),
  deleteBand: id => dispatch(deleteBand(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
// or
// export default connect(({bands})=> ({bands}), {addBand, deleteBand})(BandsContainer)
