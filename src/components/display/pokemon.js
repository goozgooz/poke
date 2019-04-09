import './_display.scss';
import React from 'react';

const Pokemon = (props) => {
  let {data} = props;
  let types = [];
  console.log(data);
  if (data.types) {
    types = data.types.map((t, i) => (
      <li key={i} className={t.type.name}> {t.type.name} </li>
    ));
  }
  
  return (
    <div className="pokemon">
      {data === 'INVALID NAME' ?
        <h1> The Pokemon you searched for does not exist :( </h1>
        :
        <React.Fragment>
          <h1> {data.name[0].toUpperCase() + data.name.slice(1)} </h1>
          <ul>
            {types}
          </ul>
          <img src={data.sprites.front_default} alt='front of pokemon'/>
          <img src={data.sprites.back_default} alt='back on pokemon'/>
        </React.Fragment>
      }
    </div>
  )
}
export default Pokemon;