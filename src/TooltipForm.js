import React from 'react'
import ReactModal from 'react-modal'


ReactModal.setAppElement('#root');

class TooltipForm extends React.Component {

  ref = null

  handleAfterOpen = () => {
    this.ref.querySelector('textarea').focus()
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
          <button>Save</button>

          <button onClick={onRequestClose}>X</button>
        </div>

        {this.renderContent()}
      </ReactModal>
    )
  }

  renderContent() {
    return (
      <div className="modal-content">
        <textarea />
      </div>
    )
  }
}

export default TooltipForm
