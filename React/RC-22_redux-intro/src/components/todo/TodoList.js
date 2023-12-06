import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const {tasks}=useSelector((state)=>state.todoReducer)
  return (
    <div>
      <div>
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;