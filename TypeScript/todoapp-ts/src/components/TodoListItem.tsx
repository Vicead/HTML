import { IconButton, ListItem, ListItemText } from '@mui/material';
import { FC } from 'react';
import DeleteIcon from "@mui/icons-material/Delete";

interface ITodoListItem{
    todo:ITodoType;
    toggleTodo:ToggleFn;
    deleteTodo:DeleteFn;
}

const TodoListItem:FC<ITodoListItem> = ({todo,toggleTodo,deleteTodo}) => {
  return (
    <ListItem
          sx= {{":hover":{cursor:"pointer"}}}
          disableGutters
          secondaryAction={
            <IconButton onClick={()=>deleteTodo(todo.id)} aria-label="delete">
              <DeleteIcon />
            </IconButton>}
        >
        <ListItemText onClick={()=>toggleTodo(todo)} primary={todo.todo} sx={{wordWrap:"break-word"}}/>
    </ListItem>
  )
}

export default TodoListItem