import React from 'react'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import CodeMirrorEditor from 'codemirror/lib/codemirror'
import moviePlugin from 'codemirror-movie'
import 'codemirror-movie/lib/movie.css'
import 'codemirror/theme/dracula.css'


class Player extends React.Component {

  editor = null

  state = {
    playing: false
  }

  componentDidMount() {
    this.initMovie()
  }

  initMovie = () => {
    this.movie = moviePlugin(CodeMirrorEditor, this.editor)

    this.movie.on('stop', name => {
      this.setState({
        playing: false
      })
    })
  }

  handlePlay = () => {

    if (this.movie.state === 'play') {
      this.movie.pause()

      this.setState({
        playing: false
      })
    } else {

      this.movie.play()
      this.setState({
        playing: true
      })
    }
  }

  handleChange = (editor, data, value) => {}

  render() {
    return (
      <div className="player container">
        <div className="container-body">{this.renderEditor()}</div>
        <div className="container-title">
          {!this.state.playing &&
            <button onClick={this.handlePlay}>Play</button>
          }
        </div>
      </div>
    )
  }

  renderEditor() {
    return (
      <CodeMirror
        editorDidMount={editor => {this.editor = editor}}
        value={this.props.script}
        onChange={this.handleChange}
        options={{
          mode: 'xml',
          theme: 'dracula',
          lineNumbers: true
        }}
      />
    )
  }
}

export default Player
