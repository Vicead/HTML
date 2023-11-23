import React from 'react'
import data from "../data.js"
import CardDiv from './styles/KartSSS'
import ImageSSS from './styles/ImageSSS.jsx'
const Card = () => {
  return (
    <div>
      {data.map((item)=>(
        <CardDiv key={item.id} ferhat={item.id%2===1 && "row-reverse"}>
          <div>
            <h3>{item.title}</h3>
            <p>{item.body} </p>
          </div>
          <ImageSSS src={`./images/${item.image}`} />
        </CardDiv>
      ))}
    </div>
  )
}

export default Card