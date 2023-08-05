
import React from 'react'
import './HandSection.css'
const HandSection = () => {
  return (
    <div>
      
        <div className='section mt-24'>
    <div className='flex w-full justify-center items-center'>
      <img src="https://alexandria-web-dev.vercel.app/static/media/Group%202.0646716d4b8b35646725.png" alt="" />
    </div>
    <div className='center text-center'>
      <h1 className=' text-[40px] sm:text-5xl'>SUBSCRIBE</h1>
      <p className='px-6 sm:text-2xl text-[#303365]' >Duis non orci justo. Nulla lobortis, elit ac imperdiet</p>
    </div><br /> 

<div class="flex justify-evenly ">
  <div class="relative  w-[432px] sm:w-[532px] mx-7">
    <input type="text" class="w-full px-4 py-2 h-14 text-[#A9AABD]  border border-gray-300 rounded-lg font-sans" placeholder='Enter your Email Address'/>
    <button class=" button absolute w-[25%] h-14 right-0 top-0  px-4 py-2 bg-[#7D75D8] text-white  rounded-lg">
      SEND
    </button>
  </div>
</div>

 

  </div>
    </div>
  )
}

export default HandSection