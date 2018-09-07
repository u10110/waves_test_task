import React, { Component } from 'react';
import {connect, Provider} from 'react-redux';

import '../assets/css/App.css';
import { TableUsers, UserForm } from '../components';
import { openForm, closeForm, addUser, showErrors } from '../actions'


class UserApp extends Component {

    render() {
        const { userForm } = this.props
        let { openForm, closeForm } = this.props

        return (
            <div className="UserApp">
                <div align="right">
                    <button type="button" onClick={()=>{openForm()}} >Добавить пользователя</button>
                </div>
                <UserForm
                    modalIsOpen={userForm.modalIsOpen}
                    onCancel={ () => { closeForm() }}
                    handleSubmit={(event)=>{ this.handleSubmit(event) }}
                    errors={userForm.errors}
                />
                <TableUsers/>
            </div>
        );
    }

    handleSubmit( event ){
        event.preventDefault();
        let { addUser, closeForm , showErrors} = this.props;

        const data = event.target.elements;
        let errors = {};
        const user = {
            fio: data.fio.value,
            birthDay: data.birthDay.value,
            birthMonth : data.birthMonth.value,
            birthYear : data.birthYear.value,
            address: data.address.value,
            town: data.town.value,
            phone: data.phone.value
        };

        if (!user.fio.toString().trim().length) {
            errors.fio = true;
        }

        if (!user.address.toString().trim().length) {
            errors.address = true;
        }

        if (!user.town.toString().trim().length) {
            errors.town = true;
        }

        if (!user.phone.toString().trim().length) {
            errors.phone = true;
        }

        if( Object.keys(errors).length > 0 ){
            showErrors( errors )
        }else{
            addUser({
                fio: data.fio.value,
                birthDay: data.birthDay.value,
                birthMonth : data.birthMonth.value,
                birthYear : data.birthYear.value,
                address: data.address.value,
                town: data.town.value,
                phone: data.phone.value
            })
            closeForm()
        }
    }
}

const mapStateToProps = (store) => {

    return {
        users : store.users,
        userForm : store.userForm,
    };
}

const mapDispatchToProps = (dispatch) => {

    return {
        openForm : () => { dispatch(openForm()) },
        closeForm : () => { dispatch(closeForm()) },
        addUser : (user) => { dispatch(addUser(user)) },
        showErrors : (errors) => { dispatch(showErrors(errors)) },
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(UserApp);
