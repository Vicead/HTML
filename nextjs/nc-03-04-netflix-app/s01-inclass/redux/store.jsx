import authReducer from "./features/authSlice"
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    devTools: process.env.NODE_ENV !== "production"
})

export default store;