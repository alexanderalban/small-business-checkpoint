import { combineReducers } from 'redux'

const user = (state = null) => state
const business = (state = []) => state;


export default combineReducers({ user, business })