import React from 'react';

const Sidebar = (props) => {
  let {pokemon} = props;
  // console.log(pokemon);
  
  let list = pokemon.map((pokemon, i) => 
    <h1 key={i}> 
      {pokemon.name} 
    </h1>
  );
  
  return (
    <div className='pokemon-list'>
      {list}
    </div>
  )
}

export default Sidebar;