import { combineReducers } from 'redux'

const user = (state = null) => state

const loggedIn = (state = false, action) => {
    switch(action.type) {
        case 'LOGIN':
            return true;
        case 'LOGOUT':
            return false;
        default: 
            return state
    }
}

const business = (state = [], action) => {
    switch(action.type) {
        case 'ADD_BUSINESS':
            return [ ...state, action.value ]
        case 'REMOVE_BUSINESS':
            const newState = [ ...state ]
            newState.splice(action.value, 1)
            return newState
        default:
            return state
    }
}

export default combineReducers({ user, business, loggedIn })