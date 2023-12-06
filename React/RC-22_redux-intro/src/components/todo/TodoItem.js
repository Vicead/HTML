import React from "react";
import okLogo from "../../assets/ok.png";
import deleteLogo from "../../assets/delete.png";
import { useDispatch } from "react-redux";
import { deletE } from "../../redux/actions/todoActions";


const TodoItem = ({task}) => {
  const dispatch=useDispatch()
  return (
    <div
      style={{ backgroundColor: "orange", borderRadius: "5px" }}
      className="todo-list"
    >
      <h2 className="todoText">{task.text}</h2>
      <div>
        <span>
          <img src={okLogo} className="ok-logo" alt="ok logo" />
        </span>
        <span>
          <img
            src={deleteLogo}
            className="delete-logo"
            alt="delete logo"
            onClick={()=>dispatch(deletE(task))}
          />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;