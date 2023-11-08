import React, { useState } from "react";

const GorevEkle = ({ tasks, setTasks }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = tasks.length + 1;
    const newTask={ id: id, text: text, day: day, isDone: false }
    setTasks([...tasks, newTask]);
    setText("")
    setDay("")
    localStorage.setItem("todos", JSON.stringify([...tasks,newTask]))
  };
  const[button,setButton]=useState(true)
  return (
    <div>
      <header className="header">
        <h1>TO DO APP</h1>
        <button className="btn" style={{backgroundColor:button ? "red" : "purple"}} onClick={()=>setButton(!button)}>{button ? "CLOSE" :"SHOW"} ADD TASK BAR</button>
      </header>
      {button && <form onSubmit={handleSubmit} >
        <div className="form-control">
          <label htmlFor="text">TASK</label>
          <input
            type="text"
            id="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </div>
        <div className="form-control">
          <label htmlFor="day">Day & Time</label>
          <input
            id="day"
            type="datetime-local"
            onChange={(e) => setDay(e.target.value)}
            value={day}
          />
        </div>
        <div>
          <button className="btn btn-submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form> }
    </div>
  );
};

export default GorevEkle;
