import React from "react";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, registerSuccess } from "../features/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        "https://10002.fullstack.clarusway.com/users/",
        userInfo
      );
      console.log("register",data);
      dispatch(registerSuccess(data))
      navigate("/stock")
    } catch (error) {
        dispatch(fetchFail())
    }
  };

  return { register };
};

export default useAuthCall;