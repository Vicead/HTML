import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    currentUser: null,
    loading: false,
    error: false,
    isAdmin: false,
    token: null,
  },
  reducers: {
    fetchStart: state => {
      state.loading = true;
      state.error = false;
    },
    registerSuccess: (state,{payload})=>{
      state.loading = false;
      state.currentUser = payload.data.username
      state.token = payload.token
    },
    //! user bilgisi farklı geldiği için ayrı slice açtık
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload?.user?.username;
      state.isAdmin = payload?.user?.isAdmin;
      state.token = payload?.token;
    },
    fetchFail: state => {
      state.loading = false;
      state.error = true;
    },
    logoutSuccess:(state)=>{
      state.loading=false;
      state.currentUser=null;
      state.isAdmin=false;
      state.token=null;
    }
  },
});

export const {
  fetchStart,
  registerSuccess,
  loginSuccess,
  fetchFail,
  logoutSuccess,
} = authSlice.actions;
export default authSlice.reducer;
