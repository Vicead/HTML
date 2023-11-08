import React from 'react'
import {FaTimesCircle} from 'react-icons/fa'
const GorevleriGoster = ({tasks,setTasks}) => {
const deleteTask=(d)=>{
const newTasks=tasks.filter((i)=>i.id!==d)
  setTasks(newTasks)
  localStorage.setItem("todos",JSON.stringify(newTasks))


}
  return (
    <div>
      {tasks.map((a)=>{
        return(
          <div key={a.id} className={a.isDone ? 'done':  'gorev'} onDoubleClick={()=>setTasks(tasks.map((b)=>b.id===a.id ? {...a,isDone:!b.isDone} : b))}>
            <h3>{a.text}  <FaTimesCircle onClick={()=>deleteTask(a.id)} /></h3>
            <h6>{a.day}</h6>
          </div>
        )
      })}
    </div>
  )
}

export default GorevleriGoster