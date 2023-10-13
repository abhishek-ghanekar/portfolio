import React from 'react'
import { FaBeer } from 'react-icons/fa';
const SideBar = () => {
  return (
    <div className='  md:flex md:flex-col md:bg-[#202226] md:h-full md:fixed md:top-0 md:left-0 md:w-20 md:text-white hidden'>
      {/* this is going to have various items */}
      {/* logo first */}
      <div className='my-5 mx-auto'>
         <FaBeer />
      </div>
      
      <div className='flex flex-col h-24 justify-between'>
        {/* items div */}
        <div className='hover:bg-[#363a3f] px-3.5 py-5 my-3 cursor-pointer transition-all	rounded-md'>
           <h1>Home</h1>
        </div>
        <div  className='hover:bg-[#363a3f]  px-3.5 py-5 my-3 cursor-pointer transition-all	rounded-md'>
           <h1>About</h1>
        </div>
        <div  className='hover:bg-[#363a3f] px-3 py-5 my-3  cursor-pointer transition-all	rounded-md'>
           <h1>Projects</h1>
        </div>
        <div  className='hover:bg-[#363a3f] px-3 py-5 my-3 cursor-pointer transition-all	rounded-md'>
           <h1>Contact</h1>
        </div>

      </div>
    </div>
  )
}

export default SideBar
