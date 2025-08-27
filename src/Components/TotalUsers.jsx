import React from 'react'
import {FaUsers} from 'react-icons/fa'
const TotalUsers = (props) => {
  return (
    <div className='flex justify-center items-center gap-2 p-8'>
      <div className=' w-[90%] flex  justify-between items-center p-8 font-bold  shadow-md shadow-gray-200 border-[0.5px] border-gray-100 rounded-md'>
       
        <p className='text-4xl font-bold text-teal-600 font-serif ml-10 italic mx-2 flex'>Total Users:
             <span className='font-sans'> {props.length}</span> 
        </p>
        <FaUsers className='text-4xl text-teal-600'/> 
      </div>
    </div>
  )
}

export default TotalUsers
