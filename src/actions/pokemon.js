import superagent from 'superagent';
import * as pokemon from '../actiontypes/pokemon';

export const fetchAll = () => (store) => {
  return superagent.get(`${process.env.POKE_API_URL}/pokemon/1/`)
    .then(results => {
      console.log(results);
    })
    .catch(console.log)
};

const fetch = (pokemon) => {
  return {
    type: pokemon.FETCH_ALL,
    paylod: pokemon,
  }
}