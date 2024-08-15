// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import postReducers from './reducers/posts'

const store = configureStore({
    reducer:{
        posts: postReducers,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
