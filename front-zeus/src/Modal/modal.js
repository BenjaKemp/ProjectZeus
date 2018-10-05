import React from 'react';
import Modal from 'react-modal';
import { connect } from "react-redux";
import {closeModal} from '../actions'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
Modal.setAppElement(root)


 class myModal extends React.Component {

closeModal(){
  this.props.modalIsOpen = !this.props.modalIsOpen;
}

  render() {
    return (
      <div>
        {console.log('this.props', this.props)}
        <Modal
          isOpen={this.props.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.props.close}>close</button>
        <h1>Holy Moly, opponent has just seen {this.props.message}</h1>
          <form>
            <input />
          </form>
        </Modal>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {

    modalIsOpen: state.modalInfo.modalIsOpen,
    message: state.modalInfo.message

  };
}

export default connect(mapStateToProps)(myModal)
