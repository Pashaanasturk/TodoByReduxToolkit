import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../applicationFeatures/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})