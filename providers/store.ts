import { configureStore } from '@reduxjs/toolkit';
import postReducers from './reducers/posts'
import authReducers from './reducers/auth'

const store = configureStore({
    reducer:{
        posts: postReducers,
        auth: authReducers
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
