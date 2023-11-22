import React from 'react'
import { useContext } from 'react'
import { KullaniciContext } from '../App'
import AnaUser from './AnaUser'
import { useKullaniciContext } from '../context/KullaniciProvider'

const Isimler = () => {

    const {users}= useKullaniciContext()
  return (
    <div>
        {/* diziden 4 kişinin ismini bastir */}
        {users.slice(0,4).map((i)=>(<div style={{textAlign:"center",background:"pink"}}>
            {i.login}
        </div>))}

        <AnaUser users={users}/>

    </div>
  )
}

export default Isimler