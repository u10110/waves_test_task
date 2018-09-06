import * as types from '../constants'

const initialState = {
    modalIsOpen : true,
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
    switch (action.type) {

        case types.ADD_USER:
            const newId = state.friends[state.friends.length-1] + 1;
            return {
                friends: state.friends.concat(newId),
                friendsById: {
                    ...state.friendsById,
                    [newId]: {
                        id: newId,
                        name: action.name
                    }
                }
            }

        default:
            return state;
    }
}