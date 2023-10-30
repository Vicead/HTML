import './Main.scss';
import Card from "./Card"
import {data} from "../../helpers/data"

const Main = () => {

    // console.log(data);
    return(
        <div className="card-container">

{/* {data.map((item)=>  <Card  item={item}/> */}
{data.map((item)=>  <Card {...item} key={item.id}/>


)}
          
        </div>
    )
}

export default Main;