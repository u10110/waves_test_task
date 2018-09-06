import * as types from '../constants'

const initialState = {
    userForm : {
        modalIsOpen : false,
        user : {},
        errors : {}
    },
    users : [
        {
            fio : 'Test',
            birthDay : '31.10.1984',
            address : 'qdadasd',
            town : 'Moscow'
        }
    ]
};

export default function users(state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case types.ADD_USER:
            return { ...state, ...action.payload }
        default:
            return state;
    }
}