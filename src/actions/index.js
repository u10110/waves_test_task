import * as types from '../constants/index';

export function openForm(){
    return {
        type: types.OPEN_FORM,
        payload : {
            modalIsOpen : true,
        }
    };
}

export function closeForm(){
    return {
        type: types.CLOSE_FORM,
        payload : {
            modalIsOpen : false,
        }
    };
}

export function addUser(user = {}) {
    return {
        type: types.ADD_USER,
        payload : {
            modalIsOpen : true,
            user : user
        }
    };
}

export function showErrors( errors = {}) {
    return {
        type: types.SHOW_ERRORS,
        payload : {
             errors
        }
    };
}

export function editUser(user) {
    return {
        type: types.EDIT_USER,
        user
    };
}

