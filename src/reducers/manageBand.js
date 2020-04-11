import { v4 as uuidv4 } from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      let band = {
        id: uuidv4(),
        name: action.name
      }
      return { bands: state.bands.concat(band) }

    case 'DELETE_BAND':
      return { bands: state.bands.filter(band => band.id !== action.id)}

    default:
      return state;
  }
};
