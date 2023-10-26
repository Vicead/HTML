import React from 'react'
import Msg from './Msg'

const People = (props) => {
    //!dest
    const{name,img,tel}=props
  return (
    <div>
        <h2>{name}</h2>
        <Msg isim={name} telefon={tel} />
        <img src={img} alt="" />
        <h4>{tel}</h4>

    </div>
  )
}

export default People