import React, { Component } from 'react';
import Game from './components/Game';
import { connect } from 'react-redux'
import newGame from './actions/newGame'
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.newGame()
  }
  render() {
    return (
      <div className="App">
        <Game/>
      </div>
    );
  }
}

export default connect(null, { newGame })(App)
