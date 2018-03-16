import React from 'react'
import './App.css'
import Player from './Player'
import Code from './Code'
import CommandOutput from './CommandOutput'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Code Movie Generator</h1>
        </header>
        <div className="App-body">
          <div className="App-column">
            <Code />
          </div>

          <div className="App-column">
            <CommandOutput />
            <Player />
          </div>
        </div>
      </div>
    )
  }
}


export default App
