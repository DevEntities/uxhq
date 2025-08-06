import React from 'react'
import { NavLink } from 'react-router-dom'
const Button = () => {
  return (<>
    <NavLink to={'/conversation'} >
      <button className="focus:outline-none focus:ring-0 flex space-x-4 items-center bg-UXHQ-black hover:bg-UXHQ-green text-white hover:text-UXHQ-black transition duration-300 px-32 max-sm:px-20 py-7 rounded-full shadow  max-md:mx-auto">
        <p className='font-dmsans font-normal text-[2.4625rem] max-md:text-[1.4625rem] leading-[1.2] tracking-[0] '>Start a conversation</p>
      </button>
    </NavLink>
  </>)
}

export default Button
