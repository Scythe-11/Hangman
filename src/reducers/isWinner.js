import { IS_WINNER } from '../actions/isWinner'
import { GAME_OVER } from '../actions/gameOver'

export default (state = null, { type, payload } = {}) => {
  switch(type) {
    case IS_WINNER :
      return true;
    case GAME_OVER :
      return false;
    default :
      return null
  }
}
