import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../redux/actions/todoActions";

const TodoInput = () => {
  const [a,setA]=useState("")
  const dispatch=useDispatch()
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(add(a))
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add Todo"
        onChange={(e)=>setA(e.target.value)}
      
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default TodoInput;