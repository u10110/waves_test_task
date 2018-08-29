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
            modalIsOpen: false,
            user : {},
            index: 0,
            data : JSON.parse(localStorage.getItem("Users"))
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(user,index) {
        this.setState({ user: user, index: index, modalIsOpen: true});
    }

    afterOpenModal() {
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    saveUser( user, index ){

        let storedUsers = JSON.parse(localStorage.getItem("Users"));

        if( !storedUsers ){
            storedUsers = [];
        }

        if( this.state.index >0 ){
            storedUsers[ index ] = user;
        }else{
            storedUsers.push(user);
        }

        localStorage.setItem("Users", JSON.stringify(storedUsers));

        //this.setState( { data : storedUsers })
    }

    onDelete( index ){

        let storedUsers = JSON.parse(localStorage.getItem("Users"));

        if( storedUsers ){
            storedUsers.splice( index, 1 )
            localStorage.setItem("Users", JSON.stringify(storedUsers));
            //this.setState( { data : storedUsers })
        }

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
                  user={this.state.user}
                  onCancel={ () => { this.closeModal() } }
                  onSubmit={ ( user ) => { this.saveUser( user ) }}
              />
          </Modal>
        <TableUsers
            data={ this.state.data }
            onEdit={ ( user, index ) => { this.openModal(user,index) } }
            onDelete={ ( index ) => { this.onDelete(index) } }
        />
      </div>
    );
  }
}

export default App;
