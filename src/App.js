import React from 'react'
import './App.css'
import Player from './Player'
import Code from './Code'
import CommandOutput from './CommandOutput'


class App extends React.Component {
  state = {
    code: `<html>
  <head>
  </head>
  <body>
    <h1>Hello world</h1>
  </body>
</html>`,
    refreshing: false,
    commands: []
  }

  handleAddCommand = command => {
    this.setState({
      commands: [...this.state.commands, command]
    })

    this.refreshPlayer()
  }

  handleCodeChange = code => {
    this.setState({
      code
    })

    this.refreshPlayer()
  }

  refreshPlayer = () => {
    this.setState({
      refreshing: true
    }, () => {
      this.setState({
        refreshing: false
      })
    })
  }

  generateScript = () => {
    let result = this.state.code
    if (!this.state.commands.length) {
      return result
    }

    result += '\n@@@\n\n'
    result += this.state.commands.map(
      one => `${one.type}: ${JSON.stringify(one.options)}`
    ).join('\n')

    return result
  }

  render() {
    const script = this.generateScript()

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Code Movie Generator</h1>
        </header>
        <div className="App-body">
          <div className="App-column">
            <Code
              code={this.state.code}
              onCodeChange={this.handleCodeChange}
              onAddCommand={this.handleAddCommand}
            />
          </div>

          <div className="App-column">
            <CommandOutput script={script} />
            {!this.state.refreshing &&
              <Player script={script} />
            }
          </div>
        </div>
      </div>
    )
  }
}


export default App
