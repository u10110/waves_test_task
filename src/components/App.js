import React, { Component } from 'react';
import TableUsers from '../components/TableUsers';
import '../assets/css/App.css';
import UserForm from "./UserForm";
import Modal from 'react-modal';

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

class App extends Component {

    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    saveUser( User ){

        let storedUsers = JSON.parse(localStorage.getItem("Users"));

        if( storedUsers === undefined ){
            storedUsers = [];
        }

        storedUsers.push(User);
        localStorage.setItem("Users", JSON.stringify(storedUsers));
    }


    render() {
    return (
      <div className="App">
        <div align="right">
            <button type="button" onClick={this.openModal} >Добавить пользователя</button>
        </div>
          <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              ariaHideApp={false}
          >
              <UserForm
                  onCancel={ () => { this.closeModal() } }
                  onSubmit={ ( User ) => { this.saveUser( User ) }}
              />
          </Modal>
        <TableUsers/>
      </div>
    );
  }
}

export default App;
