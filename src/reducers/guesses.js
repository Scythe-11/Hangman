import { GUESS_LETTER } from '../actions/guessLetter'
import { NEW_GAME } from '../actions/newGame'
import { GAME_OVER } from '../actions/gameOver'
import { IS_WINNER } from '../actions/isWinner'


export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case NEW_GAME :
      return state = []
    case GUESS_LETTER :
      return state.concat(payload)
    case GAME_OVER :
      return state
    case IS_WINNER :
      return state
    default :
      return state
  }
}
