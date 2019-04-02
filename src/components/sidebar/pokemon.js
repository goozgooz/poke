import React from 'react';

const Pokemon = (props) => {
  let {pokemon,setFocus} = props;
  
  return (
    <li onClick={setFocus}>
      {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
    </li>
  )
}

export default Pokemon;