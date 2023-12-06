const initial = {
  tasks: [
    { id: 0, text: "Working on Redux" },
    { id: 1, text: "Walk the dogs" },
  ],
};
const todoReducer = (state = initial, action) => {
  switch (action.type) {
    case "ADD":
        return{
            tasks:[...state.tasks,{id:3,text:action.payload}]
        }
    case "DELETE":
        return{
            tasks:state.tasks.filter((a)=>a!==action.payload)
        }
    default:
      return state
  }
};

export default todoReducer;
