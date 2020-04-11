import uuid from 'react-uuid'

let initialState = {
  bands: []
}

export default function manageBand(state = initialState, action) {
  
  console.log("Inside Reducer", action)
  
  switch (action.type) {
    
    case 'ADD_BAND':
      const band = { id: uuid(), name: action.name }  
      return { ...state, bands: [...state.bands, band] }

    case "DELETE_BAND":      
      return { bands: state.bands.filter(band => band.id !== action.id )}

    default:
      return state;
  }
};
