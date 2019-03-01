import React from 'react';

import gargamel3 from './assets/gargamel3.png'

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <p>{props.height} apples high</p>
      <p>{props.age} smurf years old</p>
      <div>
        <button onClick={e => props.eaten(e, props.id)}>Oh, no! This Smurf got eaten by Gargamel</button>
        <img src={gargamel3} alt="The evil Gargamel!" />
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

