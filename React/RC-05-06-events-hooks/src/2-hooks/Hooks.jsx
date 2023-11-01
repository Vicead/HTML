import React, { useState } from 'react'

const Hooks = () => {
  //!useState hook'u her zaman yukarıya yazılır
  const [sayac, setSayac]=useState(0);
  let initial = {
    isim: "Esra",
    email: "esra@gmail.com",
    yaş: 39,
    renk: "red",
  };
  const [kisi, setKisi]=useState(initial)
  
  const changeKisi=()=>{
    if(kisi.renk==="red") {
        setKisi({
          isim: "Cihan",
          email: "cihan@gmail.com",
          yaş: 35,
          renk: "blue",
        });
    }else{
        setKisi(initial);

    }


  }

  const increase=()=>setSayac(sayac+1);
  const decrease=()=>setSayac(sayac-1);
  return (
    <div className='container text-center'>
      <h2>****************************</h2>
      <h1>USESTATE</h1>
      <h2>SAYAC: {sayac}</h2>

      <button className='btn btn-primary' onClick={increase}>ARTTIR</button>
      <button className='btn btn-info' onClick={decrease}>AZALT</button>
      <button className='btn btn-danger' onClick={()=>setSayac(0)}>TEMIZLE</button>
      <h1>****************************</h1>
      <div className='mt-4'>
        <h1 className='text-info'>OBJECT İLE USESTATE KULLANIMI</h1>
        <h2>{kisi.isim}</h2>
        <h3> {kisi.email} </h3>
        <h5> {kisi.yaş} </h5>
        <button style={{backgroundColor:kisi.renk,color:"yellow"}} className='btn' onClick={changeKisi}>CHANGE</button>
      </div>
    </div>
  )
}

export default Hooks