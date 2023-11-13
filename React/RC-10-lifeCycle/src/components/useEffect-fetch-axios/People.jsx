import React, { useEffect, useState } from 'react'

const People = () => {
  const[people,setPeople]=useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json()).then((data)=>setPeople(data))
  }, [])
  
  
  return (
    <div className='container text-center mt-4'>
      <div className='row'>
      {people.map(({name,username,phone,id})=>(
        <div className='col-12 col-sm-6 col-md-4' key={id}>
          <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${id}`} alt="" />
          <h5>{name} </h5>
          <h6>{username} </h6>
          <h6>{phone} </h6>
        </div>
      ))}
    </div>
    </div>
  )
}

export default People