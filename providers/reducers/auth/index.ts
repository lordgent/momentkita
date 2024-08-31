import {combineReducers} from '@reduxjs/toolkit'
import getLoginReducer from './getLoginReducer'

export default combineReducers({
login: getLoginReducer
})