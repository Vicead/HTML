import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../App'
import MainUser from './MainUser'

const Names = () => {
  const {users}=useContext(UserContext)
  return (
    <div>
      {users.slice(0,4).map((i)=>(<div style={{textAlign:"center",background:"pink"}}>
            {i.login}
        </div>))}
      <MainUser users={users}/>
    </div>
  )
}

export default Names