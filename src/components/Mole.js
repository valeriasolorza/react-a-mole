import React from 'react';

function Mole({ onBop }) {
  return (
    <div className="mole" onClick={onBop}>
      🐹
    </div>
  );
}

export default Mole;
