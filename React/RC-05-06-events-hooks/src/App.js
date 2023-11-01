import Events from "./1-events-hookintro/Events";
import "bootstrap/dist/css/bootstrap.min.css";
import Hooks from "./2-hooks/Hooks";
import Counter from "./3-classComponent/Counter";
const App = () => {
  return (
    <div>
      {/* <Events/> */}
      {/* <Hooks/> */}
      <Counter/>
      <Counter count={"osman"}/>
    </div>
  )
}

export default App
