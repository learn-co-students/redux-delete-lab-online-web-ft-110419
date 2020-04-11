import React from 'react';
import Band from './Band';

const Bands = props => {
    console.log(props)
    
    return (
        <div>
            {props.bands.map((band) => <Band key={band.id} band={band}/>)}
        </div>
    )
    

}

export default Bands
