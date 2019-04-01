import './_display.scss';
import React from 'react';

const Pokemon = (props) => {
  let {data} = props;
  
  let types = data.types.map((t, i) => (
    <h2 key={i}> {t.type.name} </h2>
  ));
  
  console.log(data);
  return (
    <div className="pokemon">
      <h1> {data.name[0].toUpperCase() + data.name.slice(1)} </h1>
      {types}
      <img src={data.sprites.front_default} alt='front of pokemon'/>
      <img src={data.sprites.back_default} alt='back on pokemon'/>
    </div>
  )
}
export default Pokemon;