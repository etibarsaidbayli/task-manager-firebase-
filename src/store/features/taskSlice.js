import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    tasks:[]
}


export const createTask = createAsyncThunk('tasks/createTask', async(data) => {
    const response = await axios.post('http://127.0.0.1:8000/api/create ')
    console.log(response)
})


const taskSlice = createSlice({
    name:'tasks',
    initialState,
    reducers:{},
    extraReducers:{}
})


export default taskSlice.reducer