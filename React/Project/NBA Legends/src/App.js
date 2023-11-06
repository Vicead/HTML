import CardContainer from "./components/CardContainer"
import Header from "./components/Header"
import PlayerCard from "./components/PlayerCard"
import {Container} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Container className="text-center mt-4">
      <Header/>
      <CardContainer/>
    </Container>
  )
}

export default App
