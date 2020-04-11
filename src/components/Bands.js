import React from 'react';
import Band from './Band';

const Bands = props => {
    console.log(props)
    
    return (
        <div>
            <ul>
                {props.bands.map((band) => <Band key={band.id} band={band}/>)}
            </ul>
        </div>
    )
    
}

export default Bands
