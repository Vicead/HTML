import React, { useState } from 'react'
import GorevEkle from '../components/GorevEkle'
import GorevleriGoster from '../components/GorevleriGoster'
import Data from '../helper/Data'

const Home = () => {
  const [tasks,setTasks]=useState(Data)
  return (
    <div>
      <GorevEkle tasks={tasks} setTasks={setTasks}/>
      <GorevleriGoster tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}

export default Home