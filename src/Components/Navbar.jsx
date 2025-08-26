import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center px-8 py-4 shadow-sm italic">
      <div className='flex items-center  gap-4  mx-3 '>
        <div className='w-[40px] h-[40px] overflow-hidden'>
        <img className='w-full h-full object cover rounded-[50%]' src="/Multicuisine.jpg" alt="logo" />
        </div>
        <h1 className='font-bold text-xl'>Logo</h1>
      </div>

      <div>
        <ul className='flex sm:gap-8 gap-4 list-none font-semibold xs:px-10 sm:px-10 px-4 text-lg'>
          <li><Link to="/user-list">UserList</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>         
        </ul>
      </div>
    </div>

  )
}

export default Navbar
