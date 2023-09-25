
import React from 'react'
import './HandSection.css'
const HandSection = () => {
  return (
    <div className='bg-[#F6F6F6] '>
      
        <div className='section bg-[#F6F6F6]  mt-20'>
    <div className='flex w-full justify-center items-center'>
      <img src="https://alexandria-web-dev.vercel.app/static/media/Group%202.0646716d4b8b35646725.png" alt="" />
    </div>
    <div className='center text-center'>
      <h1 className=' text-[40px] font-prata sm:text-5xl '>SUBSCRIBE</h1> 
      <p className=' px-4 sm:px-6 sm:text-2xl text-[#303365] font-open-sans  mt-2' >Duis non orci justo. Nulla lobortis, elit ac imperdiet</p>
    </div>

<div class="flex justify-evenly  mt-8">
  <div class="relative  w-[432px] sm:w-[532px] mx-6">
    <input type="text" class="w-full px-4 py-2 h-14 text-[#A9AABD]  border border-gray-300 rounded-lg font-sans" placeholder='Enter your email address'/>
    <button class=" button absolute w-[25%] h-14 right-0 top-0  px-4 py-2 bg-[#7D75D8] text-white  rounded-lg">
      SEND
    </button>
  </div>
</div>

 
<br /><br /><br /><br /><br />
  </div>

 
    </div>
  )
}

export default HandSection