import {
  REQUEST_CHUCK_PENDING,
  REQUEST_CHUCK_SUCCESS,
  REQUEST_CHUCK_FAILED
} from './constants';

const initialStateJokes = {
  jokes: [],
  isPending: true
}

export const requestJokes = (state=initialStateJokes, action={}) => {
  switch (action.type) {
    case REQUEST_CHUCK_PENDING:
      return Object.assign({}, state, {isPending: true})
    case REQUEST_CHUCK_SUCCESS:
      return Object.assign({}, state, {jokes: action.payload, isPending: false})
    case REQUEST_CHUCK_FAILED:
      return Object.assign({}, state, {error: action.payload})
    default:
      return state
  }
}
