import * as pokemon from '../actiontypes/pokemon';
const initialState = [];

export default function PokemonReducer(state = initialState, action) {
  switch(action.type) {
    case pokemon.FETCH_ALL:
        return [...state, ...action.payload];
    
    default: 
      return state;
  }
}