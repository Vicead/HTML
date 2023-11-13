import React, { useEffect, useState } from 'react'
import moment from 'moment'
const Clock = () => {
  const[counter,setCounter]=useState(0)
  const[time,setTime]=useState(moment())
  
  //!compenentDidMount= ilk render da çalış bir daha burayı görme
  useEffect(()=>{
    const zaman= setInterval(()=>{
      setTime(moment());
    }, 1000);
    //!component kapandığında yada başka sayfaya gidildiğinde çalışmamız dursun isterek alttaki dursun istersek alttaki return ü yazıyoruz
    //!componentWillUnmount()
    return()=>{
      clearInterval(zaman)
    }
    //!componentDidMount()
  },[]);

  //! counter değişkeni her değiştiğinde olmasını istediğim extra olaylar için alttaki useEffect 
  useEffect(() => {
    console.log('counter increased')
  },[counter])
  
  return (
    <div>
      {time.format('HH')}:{time.format('mm')}:{time.format('ss')}
      <div>
        <h2>************************</h2>
        <h1>{counter}</h1>
        <button className='btn btn-warning' onClick={()=>setCounter(counter+1)}>INCREASE</button>
      </div>
    </div>
  )
}

export default Clock