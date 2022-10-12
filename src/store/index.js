import { configureStore } from '@reduxjs/toolkit'
import taskSlice from './features/taskSlice'
import userSlice from './features/userSlice'


export const store = configureStore({
    reducer:{
        user:userSlice,
        task:taskSlice
    }
})