import uuid from 'uuid'

export default function manageBand(state = {
  bands: []
}, action) {
  console.log(action)
  switch (action.type) {
    case 'ADD_BAND':
      const band = {
        name: action.name,
        id: uuid()
      }
      return { ...state, bands: [...state.bands, band] }
    case 'DELETE_BAND':
      return Object.assign({}, {
        bands: state.bands.filter( band => band.id !== action.id )
      })
    default:
      return state;
  }
};