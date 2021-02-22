import { combineReducers } from 'redux'

const user = (state = null) => state

const loggedIn = (state = false, action) => {
    switch(action.type) {
        case 'LOGIN':
            const loggedInTrue = action.value;
            return loggedInTrue;
        case 'LOGOUT':
            const loggedInFalse = action.value;
            return loggedInFalse;
        default: 
            return state
    }
}

const newUser = (state = '', action) => {
    switch(action.type) {
        case 'USER_UPDATE':
            const newUsername = action.value;
            return [ ...state, newUsername]
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

const latitude = (state = {lat: null}, action) => {
    switch(action.type) {
        case 'FETCH_LATITUDE':
            const newLat = {
                lat: action.value
            }
            return newLat;
        default:
            return state
    }
}


const longitude = (state = {lng: null}, action) => {
    switch(action.type) {
        case 'FETCH_LONGITUDE':
            const newLng = {
                lat: action.value
            }
            return newLng;
        default:
            return state
    }
}

export default combineReducers({ user, newUser, business, loggedIn, latitude, longitude })