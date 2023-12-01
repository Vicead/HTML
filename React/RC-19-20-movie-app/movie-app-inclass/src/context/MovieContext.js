import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const MovieContex=createContext();

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;


const MovieContextProvider = ({children}) => {
    const[movies,setMovies]=useState([])
    const[loading,setLoading]=useState(false)
    const getMovies=()=>{
        setLoading(true)
        axios.get(BASE_URL).then((res)=>setMovies(res.data.results)).catch((err)=>console.log(err)).finally(()=>setLoading(false))
    }
    useEffect(()=>{
        getMovies()
    },[])

    return (
        <MovieContex.Provider value={{movies,getMovies,loading}}>
            {children}
        </MovieContex.Provider>
    )
}

export default MovieContextProvider