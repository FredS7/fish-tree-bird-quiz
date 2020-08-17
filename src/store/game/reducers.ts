import { Question, RESET_GAME_STATE, GET_NEXT_QUESTION, INCREASE_SCORE, REMOVE_LIFE, GameState, GameActionTypes } from './types'

import questionsList from '../../data/questions.json'
import { shuffle } from '../../lib/util'

const initialState: GameState = {
  questions: shuffle(questionsList),
  currentQuestionIndex: 0,
  score: 0,
  lifes: 5
}

const gameReducer = (state = initialState, action: GameActionTypes): GameState => {
  switch (action.type) {
    case RESET_GAME_STATE:
      return {
        questions: shuffle(questionsList),
        currentQuestionIndex: 0,
        score: 0,
        lifes: 5
      }
      break
    case GET_NEXT_QUESTION:
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1
      }
      break
    case INCREASE_SCORE:
      return {
        ...state,
        score: state.score + 1
      }
      break
    case REMOVE_LIFE:
      return {
        ...state,
        lifes: state.lifes - 1
      }
      break
    default:
      return state
  }
}

export default gameReducer