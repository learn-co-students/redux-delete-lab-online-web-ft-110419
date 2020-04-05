import React from 'react';
import Band from './Band';

const Bands = props => {
    console.log(this)
    console.log(this.props)
    return(
        <div>
            {props.bands.map(band => <Band key={band.id} band={band} deleteBand={props.deleteBand} />)}
        </div>
    )
}

export default Bands;