import { createContext, useState } from "react"
import data from "./data"
import Home from "./components/Home"

export const StudentContext=createContext()
const App = () => {
  const[student,setStudent]=useState(data)
  const changeColor=(id,newColor)=>{
    setStudent(student.map((a)=>a.id===id ? {...a,color:newColor}:a))
  }
  return (
    //!bütün projeye gönderilmek üzere ilk home u, gönderilecek elemanlarla  sarmalladık 
    <StudentContext.Provider value={{student,changeColor}}>
      <Home />
    </StudentContext.Provider>
  )
}

export default App
