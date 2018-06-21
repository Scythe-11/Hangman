import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import guessLetter from '../actions/guessLetter'
import isWinner from '../actions/isWinner'
import button from './Game.css'

class Input extends PureComponent {
constructor(props) {
    super()

    const guess = props

    this.state = guess
  }

  updateGuess(event) {
    if (event.keyCode === 13) {    //if enter is pressed
      this.saveGuess()
    }
  }

  saveGuess() {
    const { word } = this.props
    var typedInput = /^[a-z]+$/i;  //to check that it is only letters to end of word
    const guess = this.refs.guess.value.toLowerCase()     // convert it to lower case

    if (guess.length === 1 || (guess.length === word.length && guess === word)) {
      if (guess === word) return this.props.isWinner()
      if (guess.match(typedInput)) this.props.storage(guess)
    }
    this.refs.guess.value = null
  }

  render() {
    return(
      <div>
        <input
          type="text"
          ref="guess"
          placeholder="Guess Letter or Word"
          defaultValue={this.state.guess}
          onChange={this.updateGuess.bind(this)}
          onKeyDown={this.updateGuess.bind(this)}/>

          <div>
            <button className="button" type="submit" onClick={this.saveGuess.bind(this)}>Guess</button>
          </div>
      </div>
    )
  }
}

const mapStateToProps = ( { guesses, word } ) => {
  return {
    guesses,
    word
  }
}
const mapDispatchToProps = { storage: guessLetter, isWinner }

export default connect(mapStateToProps, mapDispatchToProps)(Input)
