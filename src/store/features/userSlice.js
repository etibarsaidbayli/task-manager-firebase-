import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  email: null,
  name: null,

  id: null,
  token: null,
};

export const createUser = createAsyncThunk("user/createUser", async (data) => {
//   const response = await axios.post(
//     "http://127.0.0.1:8000/api/register",
//     data
//   );
    
//   return response.result

    // const response = await axios.post('http://127.0.0.1:8000/api/register', JSON.stringify({
    //     name:"ETIBAR",
    //     email:"etibar@ram.az",
    //     password:"123456789"
    // }))

    


console.log(data)
    
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
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
    },
    [createUser.fulfilled]: (state, action) => {
    //   state.email = action.payload.email
    //   state.name = action.payload.name
    //   state.id = action.payload.id
    //   state.token = action.payload.remember_token
        // alert(action.payload.result)
    },
    [createUser.rejected] : (state,action) => {
        console.log("ERROR")
    }
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
