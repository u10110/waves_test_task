import * as types from '../constants/index';

export function addUser() {
    return {
        type: types.ADD_USER,
        payload : {
            modalIsOpen : true,
            user : {}
        }
    };
}

export function deleteUser(id) {
    return {
        type: types.DELETE_USER,
        id
    };
}

export function editUser(user) {
    return {
        type: types.EDIT_USER,
        user
    };
}


/*
onChange( name, value ){

    let { user } = { ...this.state }
    user[ name ] = value
    this.setState( { user : user } )
}

handleSubmit( event ){
    event.preventDefault();
    const data = event.target.elements;
    const { onSubmit, onCancel } =  { ... this.props };
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
        this.setState( { errors : errors } )
    }else{
        onSubmit({
            fio: data.fio.value,
            birthDay: data.birthDay.value,
            birthMonth : data.birthMonth.value,
            birthYear : data.birthYear.value,
            address: data.address.value,
            town: data.town.value,
            phone: data.phone.value
        })
        onCancel()
    }
}*/