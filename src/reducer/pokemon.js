import * as pokemon from '../actiontypes/pokemon';
const initialState = [];

export default function PokemonReducer(state = initialState, action) {
  let {type, payload} = action;
  
  switch(type) {
    case pokemon.FETCH_ALL:
        return [...state, ...payload];
    
    default: 
      return state;
  }
}