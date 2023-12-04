import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const MovieCard = ({title,overview,poster_path,vote_average,id}) => {
const {currentUser}=useContext(AuthContext)
const navigate=useNavigate()
  return (
  
    <div
      className="movie"
      id="container"
      onClick={()=>navigate("details/"+id)}
    >
      <img
        loading="lazy"
        src={`http://image.tmdb.org/t/p/w1280${poster_path}`}
        alt="movie-card"
      />
      <div className="flex align-baseline justify-between p-1 text-white">
        <h5>{title}</h5>

       
        {currentUser &&   (<span
            className={`tag ${vote_average>7? "green": vote_average>6? "orange":"red" }`}
          >
            {vote_average}
          </span>) }
       
      </div>
      <div className="movie-over">
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
