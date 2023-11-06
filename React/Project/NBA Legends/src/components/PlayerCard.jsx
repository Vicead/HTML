import React, { useState } from "react";
import { Card } from "react-bootstrap";

const PlayerCard = ({ name, img, statistics }) => {

const [showImage,setShow]=useState(true)

  return (
    <Card className="rounded-2 m-auto player-card" role="button" onClick={() => setShow(!showImage)}>
      {showImage ? (
        <Card.Img variant="top" src={img}  className="player-logo"/>
      ) : (
        <ul className="m-auto">
          {statistics.map((item, index) => {
            return (
              <li className="h5 text-start list-unstyled" key={index}>
               
                🏀{item}
              </li>
            );
          })}
        </ul>
      )}

      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default PlayerCard;
