import {
  createSlice,
  createAsyncThunk,
  combineReducers,
} from "@reduxjs/toolkit";
import axios from "axios";
import {
  updateAvatarUrl,
  updatePasswordUrl,
  updateProfileUrl,
  userProfileUrl,
} from "../urls";

// Fetch logged-in user details
export const profileUser = createAsyncThunk(
  "user/profile",
  async (data, { rejectWithValue }) => {
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true, // Include credentials (cookies)
      };
      const response = await axios.get(`${userProfileUrl}`, config);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Update logged-in user password
export const updatePasswordUser = createAsyncThunk(
  "user/updatePassword",
  async (data, { rejectWithValue }) => {
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true, // Include credentials (cookies)
      };
      const response = await axios.put(`${updatePasswordUrl}`, data, config);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Update logged-in user profile
export const updateProfileUser = createAsyncThunk(
  "user/updateProfile",
  async (data, { rejectWithValue }) => {
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true, // Include credentials (cookies)
      };
      const response = await axios.put(`${updateProfileUrl}`, data, config);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Update logged-in user avatar
export const updateAvatarUser = createAsyncThunk(
  "user/updateAvatarUser",
  async (data, { rejectWithValue }) => {
    try {
      const config = {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true, // Include credentials (cookies)
      };
      const response = await axios.put(`${updateAvatarUrl}`, data, config);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

const userProfileSlice = createSlice({
  name: "user",
  initialState: {
    loadingUser: false,
    errorUser: null,
    errorUser2: null,
    errorUser3: null,
    errorUser4: null,
    msgUser: null,
    msgUser2: null,
    msgUser3: null,
    msgUser4: null,
    userProfile: null,
  },

  reducers: {
    clearErrorsUserProfile(state) {
      state.errorUser = null;
      state.errorUser2 = null;
      state.errorUser3 = null;
      state.errorUser4 = null;
      state.msgUser = null;
      state.msgUser2 = null;
      state.msgUser3 = null;
      state.msgUser4 = null;
    },
  },

  // user profile
  extraReducers: (builder) => {
    builder.addCase(profileUser.pending, (state, action) => {
      state.loadingUser = true;
      state.errorUser = null;
    });
    builder.addCase(profileUser.fulfilled, (state, action) => {
      state.loadingUser = false;
      state.errorUser = null;
      state.userProfile = action.payload?.data;
    });
    builder.addCase(profileUser.rejected, (state, action) => {
      state.loadingUser = false;
      state.userProfile = null;
      state.errorUser = action.payload?.statusCode;
    });

    // update password
    builder.addCase(updatePasswordUser.pending, (state, action) => {
      state.loadingUser = true;
      state.errorUser2 = null;
    });
    builder.addCase(updatePasswordUser.fulfilled, (state, action) => {
      state.loadingUser = false;
      state.msgUser2 = action.payload?.message;
    });
    builder.addCase(updatePasswordUser.rejected, (state, action) => {
      state.loadingUser = false;
      state.errorUser2 = action.payload?.message;
    });

    // update profile
    builder.addCase(updateProfileUser.pending, (state, action) => {
      state.loadingUser = true;
      state.errorUser3 = null;
    });
    builder.addCase(updateProfileUser.fulfilled, (state, action) => {
      state.loadingUser = false;
      state.errorUser3 = null;
      state.msgUser3 = action.payload?.message;
      const data = action.payload?.data;
      if (data) {
        state.userProfile.userProfile = data;
      }
    });
    builder.addCase(updateProfileUser.rejected, (state, action) => {
      state.loadingUser = false;
      state.errorUser3 = action.payload?.message;
      state.msgUser3 = null;
    });

    // update avatar
    builder.addCase(updateAvatarUser.pending, (state, action) => {
      state.loadingUser = true;
      state.errorUser4 = null;
    });
    builder.addCase(updateAvatarUser.fulfilled, (state, action) => {
      state.loadingUser = false;
      state.errorUser4 = null;
      state.msgUser4 = action.payload?.message;
      const data = action.payload?.data;
      console.log("data", data);
      if (data) {
        state.userProfile = action.payload?.data;
      }
    });
    builder.addCase(updateAvatarUser.rejected, (state, action) => {
      state.loadingUser = false;
      state.errorUser4 = action.payload;
      state.msgUser4 = null;
    });
  },
});

export const { clearErrorsUserProfile } = userProfileSlice.actions;

const authReducers = combineReducers({
  userProfile: userProfileSlice.reducer,
});

export default authReducers;
