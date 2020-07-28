import * as actions from '../actions/jokesActions'

export const initialState = {
  jokes: [],
  loading: false,
  hasErrors: false,
}

export default function jokesReducer(state = initialState, action) {
  switch (action.type){
    case actions.GET_JOKES:
      return { ...state, loading: true }
    case actions.GET_JOKES_SUCCESS:
      return {jokes: action.payload, loading: false, hasErrors: false}
    case actions.GET_JOKES_FAILURE:
      return {...state, loading: false, hasErrors: true}
    default:
      return state
  }
}
