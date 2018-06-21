import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Title from './Title'
import NewGameButton from './newGameButton'
import Input from './Input'
import GameProgress from './GameProgress'

class Game extends PureComponent {
  gameStatus(props) {
    const picGameOver = './images/6.jpg'
    const picWinner = './images/winner.png'
    const { isWinner } = this.props

    if (isWinner === null) return (
      <div>
        <Input />
        <GameProgress />
      </div>
    )

    if (!isWinner) return (
      <div>
        <p>'Sorry Game Over! Try again?'</p>
        <img src={picGameOver} width="300" height="300" alt='showpic'/>
      </div>
    )

    if (isWinner) return (
      <div>
      <h1> WINNER!!! Congrats! </h1>
        <img src={picWinner} width="450" height="300" alt='Winner'/>
        <h4> Hahaha this guys seems sad.... :) </h4>
      </div>
    )
  }


  render() {
    return(
      <div>
        <header>
          <Title/>
        </header>
        <main>
          <NewGameButton />
          <br/>
          { this.gameStatus() }
          <br/>
        </main>
      </div>
    )
  }
}

const mapStateToProps = ( { isWinner } ) => {
  return {
    isWinner
  }
}
export default connect(mapStateToProps)(Game)
