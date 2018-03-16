import React from 'react'
import ReactModal from 'react-modal'


ReactModal.setAppElement('#root');

class TooltipForm extends React.Component {

  ref = null

  state = {
    value: ''
  }

  handleAfterOpen = () => {
    this.ref.querySelector('textarea').focus()
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  handleSave = () => {
    this.props.onSave(this.state.value)
    this.setState({
      value: ''
    })
    this.props.onRequestClose()
  }

  render() {
    const {isOpen, onRequestClose} = this.props

    return (
      <ReactModal
        contentRef={c => this.ref = c}
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        onAfterOpen={this.handleAfterOpen}
      >
        <div className="modal-header">
          <button onClick={this.handleSave}>Save</button>

          <button onClick={onRequestClose}>X</button>
        </div>

        {this.renderContent()}
      </ReactModal>
    )
  }

  renderContent() {
    return (
      <div className="modal-content">
        <textarea
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default TooltipForm
