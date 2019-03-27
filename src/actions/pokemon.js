import superagent from 'superagent';
import * as pokemon from '../actiontypes/pokemon';
const API_URL = process.env.REACT_APP_POKE_API_URL;
console.log(API_URL)
export const fetchAll = () => (store) => {
  return superagent.get(`${API_URL}pokemon/1`)
    .then(res => {
      console.log(res.body);
    })
    .catch(err => {
      console.log('ERROR');
      console.log(err);
    })
};

const fetch = (pokemon) => {
  return {
    type: pokemon.FETCH_ALL,
    paylod: pokemon,
  }
}