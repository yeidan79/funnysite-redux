import { combineReducers } from 'redux'

import jokesReducer from './jokesReducer'
import numberReducer from './numberReducer'

const rootReducer = combineReducers({
  jokes: jokesReducer,
  number: numberReducer
})

export default rootReducer
