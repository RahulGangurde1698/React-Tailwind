import React, { useState } from 'react'
import { NavLink} from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [open,setOpen]=useState(false);
  return (
    <>

    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        Web Developer
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
        {open ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />
      }

      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
      
            <li className='md:ml-8 text-xl md:my-0 my-7'>
              <a  href = '' className='text-gray-800 hover:text-gray-400 duration-500'><NavLink to='/'>HOME</NavLink></a>
            </li>
            <li className='md:ml-8 text-xl md:my-0 my-7'>
              <a  href=''  className='text-gray-800 hover:text-gray-400 duration-500'><NavLink to='/about'>ABOUT</NavLink></a>
            </li>
            <li className='md:ml-8 text-xl md:my-0 my-7'>
              <a href=''  className='text-gray-800 hover:text-gray-400 duration-500'><NavLink to='/profile'>PROFILE</NavLink></a>
            </li>
      </ul>
      </div>
    </div>
    </>
  )
}

export default Navbar;