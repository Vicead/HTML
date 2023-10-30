import React from "react";
import "./Card.scss";

const Card = ({ data }) => {
  return (
    <div className="container">
      {data.map(({ img, job, comment, name, id }) => {
        return (
          <div key={id} className="card">
            <h1>{name}</h1>
            <h2>{job}</h2>
            <p>{comment}</p>
            <img src={img} alt="" />
            <div className="btn-div">
              <button className="btn-div--small">small</button>
              <button className="btn-div--large">large</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
