import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",

  initialState: {
    loading: false,
    error: false,
    firms:[],
    brands:[],
    sales:[],
    products:[],
    purchases:[],
    categories:[]
  },
  reducers: {
    fetchStart: state => {
      state.loading = true;
      state.error = false;
    },
    // firmsSuccess:(state,{payload})=>{
    //     state.loading = false;
    //     state.firms = payload
    // },
    // brandsSuccess:(state,{payload})=>{
    //     state.loading = false;
    //     state.brands = payload
    // },
    getSuccess:(state,{payload:{data,url}})=>{
      state.loading=false;
      state[url]=data
    },
    fetchFail: state => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  firmsSuccess,
  brandsSuccess,
  fetchFail,
  getSuccess,
} = stockSlice.actions;
export default stockSlice.reducer;
