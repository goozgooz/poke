import './_display.scss';
import React from 'react';

import Pokemon from './pokemon';

const PokemonDisplay = (props) => {
  let {pokemon} = props;
  return (
    <div className='pokemon-display'>
      {pokemon ? 
        <Pokemon data={pokemon} />
        :
        <h1> empty </h1>
      }
    </div>
  )
}

export default PokemonDisplay;