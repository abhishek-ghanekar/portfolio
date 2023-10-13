import React from 'react'
import {AiOutlineInstagram,AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
const Hero = () => {
  return (
    <div className='flex flex-col w-full bg-black md:h-screen h-[500px] text-white justify-items-start items-center'>
      <div className='md:ml-24 self-start p-5 flex '>
        <AiOutlineInstagram size='40px' className='m-0 p-1 sm:p-0 sm:m-3'/>
        <AiFillGithub size='40px' className='m-0 p-1 sm:p-0 sm:m-3'/>
        <AiFillLinkedin size='40px' className='m-0 p-1 sm:p-0 sm:m-3'/>
      </div>
      <h1 className='md:text-7xl sm:text-6xl text-4xl mt-14'>Hey, I Am <span className='text-green-500 '>Abhishek</span></h1>
      <h3 className='my-5 text-xl sm:text-3xl '>I am a full stack developer</h3>
      <p className='w-64 text-gray-400 sm:text-sm'>this is a sample description about me , it is just a sample , i have written random stuff</p>
      <button className='bg-green-400 p-3 my-5 rounded-md'>Contact Me</button>
    </div>
  )
}

export default Hero
