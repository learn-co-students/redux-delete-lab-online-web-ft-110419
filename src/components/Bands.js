import React from "react"
import Band from './Band'
function Bands({ bands, deleteBand }) {
    return (
      <div>
        {bands.map(b => (
          <Band key={b.id} id={b.id} band={b} deleteBand={deleteBand} />
        ))}
      </div>
    );
  }
export default Bands