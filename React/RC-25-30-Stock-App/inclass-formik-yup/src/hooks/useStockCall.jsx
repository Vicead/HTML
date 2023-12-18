import { useDispatch } from "react-redux";
import {
  //   brandsSuccess,
  // firmsSuccess,
  fetchFail,
  fetchStart,
  getSuccess,
} from "../features/stockSlice";
import useAxios from "./useAxios";

const useStockCall = () => {  
  const {axiosWithToken}=useAxios()
  const dispatch = useDispatch();

  const getFirms = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken('firms/', {
      });
      console.log(data.data);
      //   dispatch(firmsSuccess(data.data))
      dispatch(getSuccess({ data: data.data, url: "firms" }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const getBrands = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`brands/`, {
      });
      console.log(data.data);
      //   dispatch(brandsSuccess(data.data))
      dispatch(getSuccess({ data: data.data, url: "brands" }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`${url}/`, {
      });
      console.log(data.data);
      //   dispatch(brandsSuccess(data.data))
      dispatch(getSuccess({ data: data.data, url }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const deleteStockData = async (url,id) => {
    dispatch(fetchStart());
    try {
       await axiosWithToken.delete(`${url}/${id}`, {
      });
      getStockData(url)  
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const postStockData = async (url,body) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.post(`${url}/`,body);
      getStockData(url)
      } catch (error) {
      dispatch(fetchFail());
    }
  };

  const putStockData = async (url,body) => {
    dispatch(fetchStart());
    try {
       await axiosWithToken.put(`${url}/${body._id}`,body);
      getStockData(url)
      } catch (error) {
      dispatch(fetchFail());
    }
  };

  

  return { getFirms, getBrands,getStockData, deleteStockData, postStockData, putStockData };
};

export default useStockCall;
