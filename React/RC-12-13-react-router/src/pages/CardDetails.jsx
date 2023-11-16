import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../data'
const CardDetails = () => {
  //!navigate ile rotalandırılan parametreler, ile rotanın gönderdiği sayfada useParams ile karşılanılır
  const {name}=useParams()
  return <div>
    {data.map((i)=>i.name===name && (
      <div className='container '>
        <img src={i.img} alt="" />
        <h3>{i.name} </h3>
        <p>{i.text} </p>
      </div>
    ))}
  </div>
}

export default CardDetails