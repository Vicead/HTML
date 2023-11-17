import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import data from '../data'
const CardDetails = () => {
  //!navigate ile rotalandırılan parametreler, ile rotanın gönderdiği sayfada useParams ile karşılanılır
  const {name}=useParams()
  //**** alttaki buttonlar için useNavigate ekledim*/
  const navigate=useNavigate()
  return <div  className='container text-center mt-4' >
    {data.map((i)=>i.name===name && (
      <div>
        <img src={i.img} alt="" />
        <h3>{i.name} </h3>
        <p>{i.text} </p>
        <div>
          <button className='btn btn-primary' onClick={()=>navigate(-1)} >GO BACK</button>
          <button className='btn btn-warning' onClick={()=>navigate('/')} >GO HOME</button>
        </div>
      </div>
    ))}
  </div>
}

export default CardDetails