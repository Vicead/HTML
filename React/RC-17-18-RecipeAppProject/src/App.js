import React, { createContext, useState } from 'react'
import AppRouter from './router/AppRouter'
import axios from 'axios';

export const RecipeContext=createContext()

const APP_ID = "88ddfe5a";

const APP_KEY = "d56aadbbe8491ba1aeedb0e7b1920397";

const App = () => {
  const[name,setName]=useState(localStorage.getItem("username")|| "")
  const[pass,setPass]=useState(localStorage.getItem("password")|| "")
  const [recipes, setRecipes]=useState([])
  const [query, setQuery]=useState('')
  const [meal,setMeal]=useState('Breakfast')
  const url=`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`
  const getData=async()=>{
    const {data}= await  axios.get(url)
    setRecipes(data.hits)
  }
  return (
    <RecipeContext.Provider value={{name,pass,setName,setPass,setQuery,setMeal,getData,recipes}} >
      <AppRouter/>
    </RecipeContext.Provider>
    // <div>
    //   <AppRouter/>
    // </div>
  )
}

export default App