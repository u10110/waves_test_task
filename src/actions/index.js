import * as types from '../constants/index';

export function addUser(user) {
    return {
        type: types.ADD_USER,
        user
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