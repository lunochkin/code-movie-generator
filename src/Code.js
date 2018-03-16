import React from 'react'
import {Controlled as CodeMirror} from 'react-codemirror2'
import TooltipForm from './TooltipForm'


class Code extends React.Component {

  editor = null

  state = {
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

  handleBeforeChange = (editor, data, value) => this.props.onCodeChange(value)

  handleChange = (editor, data, value) => {}

  handleTooltipSave = text => {
    const cursor = this.editor.getCursor()
    const pos = `${cursor.line}:${cursor.ch}`

    this.props.onAddCommand({
      type: 'showTooltip',
      options: {text, pos}
    })
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
            onSave={this.handleTooltipSave}
          />
        </div>
      </div>
    )
  }

  renderEditor() {
    return (
      <CodeMirror
        editorDidMount={editor => {this.editor = editor}}
        value={this.props.code}
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
