import React, { useContext, useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import RecipeCard from "./RecipeCard";
import { HomeImg, ImgDiv } from "./HomeStyles";
import homeSvg from "../../assets/home.svg";
import { RecipeContext } from "../../App";


// const APP_ID = "88ddfe5a";

// const APP_KEY = "d56aadbbe8491ba1aeedb0e7b1920397";

const Home = () => {
  // const [recipes, setRecipes]=useState([])
  // const [query, setQuery]=useState('')
  // const [meal,setMeal]=useState('Breakfast')
  // const url=`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`
  // const getData=async()=>{
  //   const {data}= await  axios.get(url)
  //   setRecipes(data.hits)
  // }
  const {recipes}=useContext(RecipeContext)
  return (
    <div>
      <Header/>
      {/* <Header setMeal={setMeal} setQuery={setQuery} getData={getData} /> */}
      {recipes.length>0 ? (<div> <RecipeCard/> 
      {/* <RecipeCard recipes={recipes}/> */}
       </div>):
      <ImgDiv><HomeImg src={homeSvg} alt="home" className="homeImg" /></ImgDiv>}
    </div>
  );
};

export default Home;
