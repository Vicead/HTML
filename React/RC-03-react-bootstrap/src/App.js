import MyNavbar from "./components/MyNavbar"
import "bootstrap/dist/css/bootstrap.min.css"
import data from "./data"
import CourseCard from "./components/CourseCard"

const App = () => {
  return (
    <div>
      <MyNavbar/>
      <CourseCard data={data}/>
    </div>
  )
}

export default App
