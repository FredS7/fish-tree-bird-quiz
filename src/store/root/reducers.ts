import gameReducer from '../game/reducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  game: gameReducer
})

export default rootReducer