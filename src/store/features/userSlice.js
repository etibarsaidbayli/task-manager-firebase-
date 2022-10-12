import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  email: null,
  name: null,

  id: null,
  token: null,
  isLoading: true,
};

export const createUser = createAsyncThunk("user/createUser", async (data) => {
  const response = await fetch(
    "http://127.0.0.1:8000/sanctum/csrf-cookie"
  ).then((response) => {
    console.log(response);
    fetch("http://127.0.0.1:8000/api/register ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  });
  return response;
});

export const loginUser = createAsyncThunk("user/loginUser", async (data) => {
  const response = await axios.post("http://127.0.0.1:8000/api/login", data);
  // console.log(response.data)
  return response.data;
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.id = action.payload.id;
      state.token = action.payload.token;
    },
    removeUser: (state, action) => {
      state.email = null;
      state.id = null;
      state.token = null;
    },
  },
  extraReducers: {
    [createUser.pending]: (state, action) => {
      console.log("create User pending");
      state.isLoading = true;
    },

    [createUser.fulfilled]: (state, action) => {
      // state.email = action.payload.email;
      // state.name = action.payload.name;
      // state.id = action.payload.id;
      // state.token = action.payload.remember_token;
      // state.isLoading = false;
    },

    [loginUser.fulfilled]: (state, action) => {
      const { token, user } = action.payload;
      console.log(user);
      state.email = user.email;
      state.name = user.name;
      state.id = user.id;
      state.token = token;
      
    },
    [createUser.rejected]: (state, action) => {
      console.log("ERROR");
      state.isLoading = false;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
