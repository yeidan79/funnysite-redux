import * as actions from '../actions/numberActions.js'

export const initialState = {
  number: '',
  pastNumber: '',
  loading: false,
  hasErrors: false,
}

export default function numberReducer(state = initialState, action) {
  switch (action.type){
    case actions.GET_NUMBER:
      return { ...state, loading: true }
    case actions.GET_NUMBER_SUCCESS:
      return {
        pastNumber: state.number,
        number: action.payload,
        loading: false,
        hasErrors: false
      }
    case actions.GET_NUMBER_FAILURE:
      return {...state, loading: false, hasErrors: true}
    default:
      return state
  }
}
