import React from 'react'

const Msg = ({isim,telefon}) => {
    // const {isim,telefon}=props
  return (
    <div  style={{color: "red"}}>
        <h1>Merhaba ben {isim} ve telefon numaram {telefon}</h1>
    </div>
  )
}

export default Msg