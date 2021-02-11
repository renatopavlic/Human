import React from 'react';
import "./Hexagon.css";

function Hexagon( { value } ) {

  return (
    <div className="myhexagon">
      <span className="hexagon__value">{value}</span>
    </div>
  )
}

export default Hexagon;
