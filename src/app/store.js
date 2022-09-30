import {configureStore} from '@reduxjs/toolkit';
import  userReducer from '../features/userslice';

export default configureStore({
    reducer:{
        user:userReducer,
    },
});