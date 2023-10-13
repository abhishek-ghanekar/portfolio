import React from 'react'
import demoProject from './demoProject'
const Project = () => {
  return (
    <div className='w-full bg-black h-96 text-white'>
      {/* this will contain the multiple projects i have made */}
      
      <div className='flex'>
        <demoProject/>
      </div>
    </div>
  )
}

export default Project
