import React, {Component} from 'react';

const Bands = props => {
    return(
        <div>
            {this.props.map((band, idx) => <div key={idx}>{band}</div>)}
        </div>
    )
}

export default Bands;