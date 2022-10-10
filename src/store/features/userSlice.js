import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState= {
    email:null,
    id:null,
    token:null
    
}




const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        setUser:(state,action) => {
            state.email=action.payload.email
            state.id=action.payload.id
            state.token=action.payload.token
        },
        removeUser:(state,action) => {
            state.email=null
            state.id=null
            state.token=null
        }
    },
    extraReducers:{
       
    }
})

export const { setUser,removeUser } = userSlice.actions
export default userSlice.reducer