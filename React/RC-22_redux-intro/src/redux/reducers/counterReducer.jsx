
const counterReducer = (state = { counterResult: 0 }, action1) => {
  console.log(action1);

  switch (action1.type) {
    case "INCREASE":
      return {
        counterResult: state.counterResult + 1,
        text1: action1.payload1,
      };
    case "RESET":
      return { counterResult: 0, text1: action1.payload1 };

    case "DECREASE":
      return {
        counterResult: state.counterResult - 1,text1:action1.payload1
      };

    default:
      return state;
  }
};

export default counterReducer;
