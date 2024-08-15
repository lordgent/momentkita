import {combineReducers} from '@reduxjs/toolkit'
import getPostReducer from './getPostReducer'

export default combineReducers({
list_post: getPostReducer
})