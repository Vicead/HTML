import Header from "./components/Header/Header"
import LessonCard from "./components/LessonCard/LessonCard"
import data from "./helper/data"
const App = () => {
  return (
    <div>
    <Header/>
    {/* <LessonCard data={data}/> */}
    <div className="container1">{data.map((item)=><LessonCard {...item} key={item.id}/>)}</div>
    </div>
  )
}

export default App
