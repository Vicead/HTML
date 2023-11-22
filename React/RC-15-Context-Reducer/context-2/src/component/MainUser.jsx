import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../App'

const MainUser = ({users}) => {
  const{changeWidth}=useContext(UserContext)
  return (
    <div>
      {users.map((i)=>{
        return(
          <div>
            <h3>{i.login} </h3>
            <img src={i.avater_url} alt="" width={i.width} />
            <div>
              <label htmlFor="">Image width(px)</label>
              <input type="number" onChange={(e)=>changeWidth(i.id,e.target.value)} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MainUser