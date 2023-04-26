import React from 'react'
import './HandSection.css'
const HandSection = () => {
  return (
    <div>
        <div className='section'>
    <div className='flex w-full justify-center items-center'>
      <img src="https://alexandria-web-dev.vercel.app/static/media/Group%202.0646716d4b8b35646725.png" alt="" />
    </div>
    <div className='center text-center'>
      <h1>SUBSCRIBE</h1>
      <p>Duis non orci justo. Nulla lobortis, elit ac imperdiet</p>
    </div><br /> 
    <div className='items-center text-center'>
      <input className='input w-64 h-12  sm:w-[432px] md:w-[532px]  md:h-[52px]' type="text" placeholder="Enter your email address" />
      <button className='button w-24 h-12 sm:w-[122px] md:w-[138px] md:h-[52px]'>Send</button><br /><br />
    </div>
  </div>
    </div>
  )
}

export default HandSection
