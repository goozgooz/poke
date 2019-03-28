import React from 'react';

const Pokemon = (props) => {
  let {pokemon,setFocus} = props;
  
  return (
    <li onClick={setFocus}>
      {pokemon.name}
    </li>
  )
}

export default Pokemon;