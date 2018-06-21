export const GUESS_LETTER = 'GUESS_LETTER'

export default (guess) => {
  return {
    type: GUESS_LETTER,
    payload: guess,
  }
}
