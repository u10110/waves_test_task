import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Modal from "react-modal";

import { addUser } from '../actions';
import { TableUsers, UserForm } from '../components';


class UsersApp extends Component {


    render () {
        const { modalIsOpen, user } = this.props
        let { addUser } = this.props

        return (
            <div >
                <UserForm />
                <TableUsers/>
            </div>
        );
    }
}

const mapStateToProps = function(store) {
console.log(store)
    return {
        users : store.users
    };
}


export default connect(mapStateToProps)(UsersApp);