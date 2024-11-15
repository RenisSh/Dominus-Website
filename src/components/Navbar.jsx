import React from 'react'
import logo from '../assets/logo.svg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='px-10 py-5 mx-auto w-[100%]'>
      <div className='flex justify-between items-center  mx-auto'>
        
        {/* <h1 className='w-1/2 text-4xl font-bold text-blue-800'>DOMINUS</h1> */}
          
        <img src={logo} alt="Logo" width="160" height="40" className='m-2'/>
          
        <ul className='flex list-none'>
          {/* <li className='px-10 hover:bg-gray-600 rounded-xl font-bold hover:text-white'>Home</li> */}
          {/* <li className='px-10 hover:bg-gray-600 rounded-xl font-bold hover:text-white'>Sherbimet</li>
          <li className='px-10 hover:bg-gray-600 rounded-xl font-bold hover:text-white'>Legjislactioni</li>
          <li className='px-10 hover:bg-gray-600 rounded-xl font-bold hover:text-white'>Ankandet</li>
          <li className='px-10 hover:bg-gray-600 rounded-xl font-bold hover:text-white'>Na kontaktoni</li> */}
          
          <li className='px-1'>
              <NavLink
                  to="/"
                  className={({ isActive }) =>
                      isActive
                          ? 'font-bold text-white bg-gray-600 rounded-xl px-4 py-2'
                          : 'hover:bg-gray-600 hover:text-white rounded-xl font-bold px-4 py-2'
                  }
              >
                  Home
              </NavLink>
          </li>
          <li className='px-2'>
              <NavLink
                  to="/sherbimet"
                  className={({ isActive }) =>
                      isActive
                          ? 'font-bold text-white bg-gray-600 rounded-xl px-4 py-2'
                          : 'hover:bg-gray-600 hover:text-white rounded-xl font-bold px-4 py-2'
                  }
              >
                  Sherbimet
              </NavLink>
          </li>
          <li className='px-2'>
              <NavLink
                  to="/legjislacioni"
                  className={({ isActive }) =>
                      isActive
                          ? 'font-bold text-white bg-gray-600 rounded-xl px-4 py-2'
                          : 'hover:bg-gray-600 hover:text-white rounded-xl font-bold px-4 py-2'
                  }
              >
                  Legjislacioni
              </NavLink>
          </li>
          <li className='px-2'>
              <NavLink
                  to="/ankandet"
                  className={({ isActive }) =>
                      isActive
                          ? 'font-bold text-white bg-gray-600 rounded-xl px-4 py-2'
                          : 'hover:bg-gray-600 hover:text-white rounded-xl font-bold px-4 py-2'
                  }
              >
                  Ankandet
              </NavLink>
          </li>
          <li className='px-2'>
              <NavLink
                  to="/na-kontaktoni"
                  className={({ isActive }) =>
                      isActive
                          ? 'font-bold text-white bg-gray-600 rounded-xl px-4 py-2'
                          : 'hover:bg-gray-600 hover:text-white rounded-xl font-bold px-4 py-2'
                  }
              >
                  Na kontaktoni
              </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
