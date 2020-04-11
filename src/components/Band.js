import React, { Component } from 'react';
import { connect } from 'react-redux';

class Band extends Component {

  handleClick = id => {
    console.log(id, this.props)
    this.props.deleteBand(id)

  }

  render() {
    console.log("Band Component", this.props)

    return(
      <div>
        <li>{this.props.band.name}</li>
        <button onClick={(event) => this.handleClick(this.props.band.id)}>DELETE</button>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {

  return {
		deleteBand: id => dispatch({ type: "DELETE_BAND", id })
  }
  
}

export default connect(null, mapDispatchToProps)(Band);
