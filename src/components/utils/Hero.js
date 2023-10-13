import React from 'react'
import {AiOutlineInstagram,AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
const Hero = () => {
  return (
    <div className='flex flex-col w-full bg-black md:h-screen h-[500px] text-white justify-items-start items-center'>
      <div className='md:ml-24 self-start p-5 flex '>
        <AiOutlineInstagram/>
        <AiFillGithub/>
        <AiFillLinkedin/>
      </div>
      <h1 className='text-4xl mt-14'>Hey, I Am <span className='text-green-500 '>Abhishek</span></h1>
      <h3 className='my-5 text-xl'>I am a full stack developer</h3>
      <p className='w-64 text-gray-400'>this is a sample description about me , it is just a sample , i have written random stuff</p>
      <button className='bg-blue-400 p-3 my-5 '>Contact Me</button>
    </div>
  )
}

export default Hero
