import React from 'react'
import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='px-10 py-5 mx-auto w-[100%]'>
      <div className='flex justify-between items-center  mx-auto'>
        
        {/* <h1 className='w-1/2 text-4xl font-bold text-blue-800'>DOMINUS</h1> */}
          
        <img src={logo} alt="Logo" width="160" height="40" className='m-2'/>
          
        <ul className='flex list-none'>
          <li className='px-10 hover:bg-gray-600 rounded-xl font-bold hover:text-white'>Home</li>
          <li className='px-10 hover:bg-gray-600 rounded-xl font-bold hover:text-white'>Sherbimet</li>
          <li className='px-10 hover:bg-gray-600 rounded-xl font-bold hover:text-white'>Legjislactioni</li>
          <li className='px-10 hover:bg-gray-600 rounded-xl font-bold hover:text-white'>Ankandet</li>
          <li className='px-10 hover:bg-gray-600 rounded-xl font-bold hover:text-white'>Na kontaktoni</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
