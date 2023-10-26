import React from 'react'
import "./LessonCard.css"

const LessonCard = ({id,name,image,hour}) => {
  return (
    <div className='container'>
    
    {/* {data.map(({id,name,hour,image})=>{
        return <div>{name}</div>
    })} */}
        <img src={image} alt="" width={50}/>
        <div> 
        <p><span>Lesson Name:</span>{name} </p>
        <p><span>Lesson Hour:</span>{hour} </p>
        </div>
       
    </div>
  )
}

export default LessonCard