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
        case types.OPEN_FORM:
            return { ...state, userForm : {...action.payload } };
        case types.CLOSE_FORM:
            return { ...state, userForm : {...action.payload } };
        case types.ADD_USER:
            return { ...state, userForm : { user : action.payload } };
        case types.SHOW_ERRORS:
            return { ...state, userForm : { ...state.userForm ,errors : action.payload.errors } };
        default:
            return state;
    }
}