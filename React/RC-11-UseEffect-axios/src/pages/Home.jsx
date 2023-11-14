import React, { useEffect, useState } from "react";
import axios from "axios";
import BilgiList from "../components/BilgiList";
import AddBilgi from "../components/AddBilgi";
const Home = () => {
  const [tutorial, setTutorial] = useState([]);
  const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
  //! GET işlemi

  const getTutorials = async () => {
    const veri = await axios.get(BASE_URL);

    setTutorial(veri.data);
  };
  useEffect(() => {
    getTutorials();
  }, []);

  //!POST işlemi
  
  const postBilgi=async(veri)=>{
    await axios.post(BASE_URL,veri)
    getTutorials()
  }

  // const deleteBilgi=async(id)=>{
  //   await axios.delete(BASE_URL/id)
  // }
  return<>
    <AddBilgi postBilgi={postBilgi} />
    <BilgiList tutorial={tutorial} getTutorials={getTutorials} />
  </>
};

export default Home;
