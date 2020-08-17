import React from 'react'

import './Game.css'
import tree from '../../data/images/tree.png'
import fish from '../../data/images/fish.png'
import bird from '../../data/images/bird.png'

import life from '../../data/images/life.png'
import lostLife from '../../data/images/lost_life.png'

import { useDispatch, useSelector } from 'react-redux'
import { rootState } from '../../store/root/types'
import { INCREASE_SCORE, GET_NEXT_QUESTION, REMOVE_LIFE, RESET_GAME_STATE} from '../../store/game/types'

const wrongSounds = [
  new Audio(process.env.PUBLIC_URL + '/sounds/wrong/wrong_1.mp3'),
  new Audio(process.env.PUBLIC_URL + '/sounds/wrong/wrong_2.mp3'),
  new Audio(process.env.PUBLIC_URL + '/sounds/wrong/wrong_3.mp3'),
  new Audio(process.env.PUBLIC_URL + '/sounds/wrong/wrong_4.mp3'),
  new Audio(process.env.PUBLIC_URL + '/sounds/wrong/wrong_5.mp3')
]

const retrySounds = [
  new Audio(process.env.PUBLIC_URL + '/sounds/retry/retry_1.mp3')
]

const victorySounds = [
  new Audio(process.env.PUBLIC_URL + '/sounds/victory/victory_1.mp3'),
  new Audio(process.env.PUBLIC_URL + '/sounds/victory/victory_2.mp3'),
  new Audio(process.env.PUBLIC_URL + '/sounds/victory/victory_3.mp3')
]

const gameOverSounds = [
  new Audio(process.env.PUBLIC_URL + '/sounds/game_over/game_over_1.mp3'),
  new Audio(process.env.PUBLIC_URL + '/sounds/game_over/game_over_2.mp3'),
  new Audio(process.env.PUBLIC_URL + '/sounds/game_over/game_over_3.mp3'),
  new Audio(process.env.PUBLIC_URL + '/sounds/game_over/game_over_4.mp3'),
  new Audio(process.env.PUBLIC_URL + '/sounds/game_over/game_over_5.mp3')
]

const Game = () => {

  const playRandomSound = (soundList: HTMLAudioElement[]) => {
    let sound = soundList[Math.floor(Math.random() * soundList.length)]
    sound.play()
      .then(() => {})
      .catch((error) => {
        console.log(error)
      })
  }

  const gameState = useSelector((state: rootState) => state.game)
  const dispatch = useDispatch()

  const giveAnswer = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    let answer = event.currentTarget.dataset.answer

    if (answer === gameState.questions[gameState.currentQuestionIndex].answer) {
      
      dispatch({type: INCREASE_SCORE})
    } else {
      if (gameState.lifes > 1) {
        playRandomSound(wrongSounds)
      } else {
        playRandomSound(gameOverSounds)
      }
      dispatch({type: REMOVE_LIFE})
    }
    if (gameState.questions.length === gameState.currentQuestionIndex + 1 && gameState.lifes > 0) {
      playRandomSound(victorySounds)
    }

    dispatch({type: GET_NEXT_QUESTION})
  }

  const restartLostGame = () => {
    playRandomSound(retrySounds)
    dispatch({type: RESET_GAME_STATE})
  }

  const restartWonGame = () => {
    dispatch({type: RESET_GAME_STATE})
  }

  let lifes: number[] = [0,0,0,0,0]

  for (let i=0; i < gameState.lifes; i++) {
    lifes[i] = 1
  }

  if (gameState.lifes > 0) {

    if (gameState.questions.length > gameState.currentQuestionIndex) {

      // Game is ongoing

      return (
        <div>
          <h1>Fisch, Baum oder Vogel?</h1>
          <div>
            {
              lifes.map((item) => {
                if (item === 1) {
                  return <img className={'life-image'} src={life}></img>
                } else if (item === 0) {
                  return <img className={'life-image'} src={lostLife}></img>
                }
              })
            }
            <p>Verbleibende Namen: {gameState.questions.length - gameState.currentQuestionIndex}</p>
            <h3>Was ist ein/e {gameState.questions[gameState.currentQuestionIndex].name} ?</h3>
          </div>
          <button className={'game-button'} data-answer='Fisch' style={{'backgroundColor': 'blue'}} onClick={giveAnswer}><p>Fisch</p><img src={fish}></img></button>
          <button className={'game-button'} data-answer='Baum' style={{'backgroundColor': 'green'}} onClick={giveAnswer}><p>Baum</p><img src={tree}></img></button>
          <button className={'game-button'} data-answer='Vogel' style={{'backgroundColor': 'red'}} onClick={giveAnswer}><p>Vogel</p><img src={bird}></img></button>
        </div>
      )
    } else {
      // Game is won
      return (
        <div>
          <h1>Echt geil gemacht!</h1>
          <button onClick={restartWonGame}>Lass mich nochmal ran</button>
        </div>
      )

    }
  } else {
    // Game is lost
    return (
      <div>
        <h1>rip</h1>
        <button onClick={restartLostGame}>Ich schaffe das</button>
      </div>
    )
  }
}

export default Game