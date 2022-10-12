import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";

const initialState = {
  tasks: [],
};

export const createTask = createAsyncThunk("tasks/createTask", async (data) => {


  const response = await fetch("http://127.0.0.1:8000/api/create", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Authorization": "Bearer 34|gL7CSkd2xjABQmi5b2Am9qJepK508oh6V8zTTOIE",
    },
    body: JSON.stringify(data),
  });



    
});

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default taskSlice.reducer;
