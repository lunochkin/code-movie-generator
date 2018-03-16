import React from 'react'
import {Controlled as CodeMirror} from 'react-codemirror2'
import TooltipForm from './TooltipForm'


class Code extends React.Component {

  editor = null

  state = {
    value: `<html>
  <head>
  </head>
  <body>
    <h1>Hello world</h1>
  </body>
</html>`,
    showModal: false
  }

  componentDidMount() {
    this.editor.on('contextmenu', (editor, event) => {
      event.preventDefault()

      this.setState({
        showModal: true
      })
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  handleBeforeChange = (editor, data, value) => {
    this.setState({
      value
    })
  }

  handleChange = (editor, data, value) => {
  }

  render() {
    return (
      <div className="code container">
        <div className="container-title">Code</div>
        <div className="container-body">
          {this.renderEditor()}

          <TooltipForm
            isOpen={this.state.showModal}
            onRequestClose={this.handleCloseModal}
          />
        </div>
      </div>
    )
  }

  renderEditor() {
    return (
      <CodeMirror
        editorDidMount={editor => {this.editor = editor}}
        value={this.state.value}
        onBeforeChange={this.handleBeforeChange}
        onChange={this.handleChange}
        options={{
          mode: 'xml',
          theme: 'material',
          lineNumbers: true
        }}
      />
    )
  }
}


export default Code
