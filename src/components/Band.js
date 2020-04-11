import React, { Component } from 'react';
import { connect } from 'react-redux';

class Band extends Component {

  handleClick() {

  }


  render() {
    console.log("Are you Working", this.state)



    return(
      <div>
        <h1>{this.props.band.name}</h1>
        <button onClick={this.handleClick}>DELETE</button>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  console.log(this.props)

  return {
		deleteBand: id => dispatch({ type: "DELETE_BAND", id })
  }
  
}



export default connect(null, mapDispatchToProps)(Band);
