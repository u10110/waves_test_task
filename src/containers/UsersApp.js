import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Modal from "react-modal";

import * as UserActions from '../actions';
import { TableUsers, UserForm } from '../components';

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


class UsersApp extends Component {

    render () {

        return (
            <div >
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
                <TableUsers/>
            </div>
        );
    }
}

const mapStateToProps = function(store) {

    return {
        modalIsOpen: store.default.modalIsOpen
    };
}

export default connect(mapStateToProps)(UsersApp);