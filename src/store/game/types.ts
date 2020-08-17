export interface Question {
  name: string
  answer: string
}

export interface GameState {
  questions: Question[],
  currentQuestionIndex: number,
  score: number,
  lifes: number
}

export const RESET_GAME_STATE = 'RESET_GAME_STATE'
export const GET_NEXT_QUESTION = 'GET_NEXT_QUESTION'
export const INCREASE_SCORE = 'INCREASE_SCORE'
export const REMOVE_LIFE = 'REMOVE_LIFE'

interface ResetGameStateAction {
  type: typeof RESET_GAME_STATE
}

interface GetNextQuestionAction {
  type: typeof GET_NEXT_QUESTION
}

interface IncreaseScoreAction {
  type: typeof INCREASE_SCORE
}

interface RemoveLifeAction {
  type: typeof REMOVE_LIFE
}

export type GameActionTypes = ResetGameStateAction | GetNextQuestionAction | IncreaseScoreAction | RemoveLifeAction