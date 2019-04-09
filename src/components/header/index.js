import './_header.scss';
import React from 'react';

import SearchBar from '../search';

const Header = (props) => {
  let {findPokemon} = props;
  
  return (
    <div className="header">
      <h1> Pokedex </h1>
      <SearchBar
        findPokemon={findPokemon}
      />
    </div>
  )
}

export default Header;