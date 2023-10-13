import React from 'react'
import SideBar from './utils/SideBar'
import Hero from './utils/Hero'
import Project from './utils/Project'
const HomePage = () => {
  return (
    <>
    <div className='flex'>
      {/* this will have the homepage containe */}
      <SideBar />
       <Hero/>
    </div>
    <div>
       <Project/>
    </div>
  
    </>
  )
}

export default HomePage
