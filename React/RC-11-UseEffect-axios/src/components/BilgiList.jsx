import React from 'react'
import {FaEdit} from 'react-icons/fa'
import {AiFillDelete} from 'react-icons/ai'
import axios from 'axios'
const BilgiList = ({tutorial,getTutorials}) => {
  const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
  const deleteBilgi=async(id)=>{
    await axios.delete(`${BASE_URL}${id}/`)
    getTutorials()
  }
  return (
    <div className='container mt-4'>
      <table className="table table-striped">
   <thead>
     <tr>
       <th scope="col">#id</th>
       <th scope="col">Title</th>
       <th scope="col">Description</th>
       <th scope="col" className="text-center">
         Edit
       </th>
     </tr>
   </thead>
   <tbody>
      {tutorial.map(({id,title,description})=>{
        return(
          <tr >
           <th>{id} </th>
           <td>{title} </td>
           <td>{description} </td>
           <td className="text-center ">
             <AiFillDelete
                type="button"
                size={22}
                className="text-danger cursor-pointer"
                onClick={()=>deleteBilgi(id)}
             />

             <FaEdit
               data-bs-toggle="modal"
               data-bs-target="#editModal"
               size={20}
               type="button"
               className="me-2 text-warning cursor-pointer"
               
             />
           </td>
         </tr>
        )
      })}
      
    </tbody>
 </table>
    </div>
  )
}

export default BilgiList