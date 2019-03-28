import React from 'react';

const PokemonDisplay = (props) => {
  let {pokemon} = props;
  
  return (
    <div className='pokemon-display'>
      {pokemon ? 
        <h1> {pokemon.name} </h1>
        :
        <h1> empty </h1>
      }
    </div>
  )
}

export default PokemonDisplay;