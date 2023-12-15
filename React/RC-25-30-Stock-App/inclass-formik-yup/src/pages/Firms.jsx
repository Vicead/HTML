import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";
const Firms = () => {
  // const BASE_URL = import.meta.env.VITE_BASE_URL
  // const {token} = useSelector(state=>state.auth)
  // const getFirms = async ()=>{

  //   try {
  //     const {data} = await axios(`${BASE_URL}firms/`,{
  //       headers:{
  //         "Authorization":`Token ${token}`
  //       }
  //     })
  //     console.log(data.data)
  //   } catch (error) {

  //   }
  // }

  const { getFirms, getStockData } = useStockCall();
  const { firms } = useSelector((state) => state.stock);

  useEffect(() => {
    // getFirms();
    getStockData("firms")
  }, []);
  console.log(firms);
  return <div style={{ marginTop: "50rem" }}>Firms</div>;
};

export default Firms;
