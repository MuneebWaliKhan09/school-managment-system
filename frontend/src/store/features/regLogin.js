import {
  createSlice,
  createAsyncThunk,
  combineReducers,
} from "@reduxjs/toolkit";
import axios from "axios";
import {
  logoutUrl,
  registerUrl,
  loginUrl,
} from "../urls"

export const register = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const config = { 
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true // Include credentials (cookies)
      };
      const response = await axios.post(`${registerUrl}`, data, config);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (data, { rejectWithValue }) => {
  try {
    const config = { 
      headers: { "Content-Type": "application/json" },
      withCredentials: true // Include credentials (cookies)
    };
    const response = await axios.post(`${loginUrl}`, data, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error?.response?.data);
  }
});

export const logout = createAsyncThunk("auth/logout", async (data, { rejectWithValue }) => {
  try {
    const config = { 
      headers: { "Content-Type": "application/json" },
      withCredentials: true // Include credentials (cookies)
    };
    const response = await axios.post(`${logoutUrl}`, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error?.response?.data);
  }
});


const userAuthorizationSlice = createSlice({
  name: "auth",
  initialState: {
    loadingAuth: false,
    errorAuth: null,
    msgAuth: null,
    userD: null
  },

  reducers: {
    clearErrorsAuth(state) {
      state.errorAuth = null,
      state.msgAuth = null
    },
  },

  // register user
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state, action) => {
      state.loadingAuth = true;
      state.errorAuth = null;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loadingAuth = false;
      state.msgAuth = action.payload?.message;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loadingAuth = false;
      state.errorAuth = action.payload?.message;
      state.msgAuth = null;
    });
    

    // login user
    builder.addCase(login.pending, (state, action) => {
      state.loadingAuth = true;
      state.errorAuth = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loadingAuth = false;
      state.msgAuth = action.payload?.message;
      const { role, _id } = action.payload?.data?.user;
      state.userD = {role, _id};
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loadingAuth = false;
      state.errorAuth = action.payload?.message;
    })

    // logout user
    builder.addCase(logout.pending, (state, action) => {
      state.loadingAuth = true;
      state.errorAuth = null;
    })
    builder.addCase(logout.fulfilled, (state, action) => {
      state.loadingAuth = false;
      state.msgAuth = action.payload?.message;
      state.userD = null;
    })
    builder.addCase(logout.rejected, (state, action) => {
      state.loadingAuth = false;
      state.errorAuth = action.payload?.message;
      state.userD = null;
      state.msgAuth = null;
    })
  },
  
});

export const { clearErrorsAuth } = userAuthorizationSlice.actions;






const authReducers = combineReducers({
  userAuth: userAuthorizationSlice.reducer,
});

export default authReducers;
