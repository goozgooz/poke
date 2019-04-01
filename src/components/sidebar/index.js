import './_sidebar.scss';
import React from 'react';
import Pokemon from './pokemon';

const Sidebar = (props) => {
  let {pokemon, setFocus} = props;

  let list = pokemon.map((pokemon, i) => 
    <Pokemon 
      key={i}
      pokemon={pokemon}
      setFocus={() => setFocus(pokemon.name)}
    />
  );
  
  return (
    <ul className='pokemon-list'>
      {list}
    </ul>
  )
}

export default Sidebar;