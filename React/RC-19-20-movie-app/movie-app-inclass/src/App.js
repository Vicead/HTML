import React from "react";
import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./context/AuthContext";
import {ToastContainer} from "react-toastify"
import MovieContextProvider from "./context/MovieContext";

const App = () => {
  return (
    <AuthContextProvider>
      <MovieContextProvider>
        <AppRouter/>
        <ToastContainer/>
      </MovieContextProvider>
    </AuthContextProvider>
  );
};

export default App;
