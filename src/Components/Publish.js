import React from 'react'
import "../Components/Publish.css"
// import { BsDribbble } from 'react-icons/bs'
import alexndra from "../images/alexndra.png"
import publish from "../images/publish.png"
import line from "../images/line.png"
import inkpot from "../images/inkpot.png" 



const Publish = () => {
  return (
    <div className=''>
    <div className=''> 
    <div className='hidden sm:block'>
    <br /><br />
    </div>
 
    <h2 className='text-2xl sm:text-3xl text-center'>Want to add your work?</h2> <br />
    <button className='contact block text-white font-semibold sm:text-2xl  px-6  sm:px-12 py-3 rounded-lg   mx-auto justify-center '>CONTACT US</button> 
    
    <div className='hidden sm:block'>
    <br /><br />
    </div>

    <br /><br />
    <img src={line}  alt="line" className='center' /><br /><br />
    <h1  className='px-6 font-serif text-[40px] sm:text-5xl text-center'>Welcome to the<span className='text-[#7D75D8]'> wall of</span></h1>
    <div className='px-6'><img src={alexndra} className="center" alt="alexndra" /></div><br />
    <p className='lg:w-1/3 text-[#303365] justify-center mx-auto text-center text-2xl md:text-3xl md:w-1/2 w-4/5'>
        This is where we tell you at all our hopes and aspirations.<br/> </p>
        <div className='center text-2xl md:text-3xl md:w-1/2 px-1 text-[#303365] text-center '>Behold the wanderer of the literary metaverse.</div> 


        <br /><br />
    <img src={line} className='justify-center mx-auto' alt="line-img" />
    <br /><br /><br /><br /> 
  </div>

<div className='hidden sm:block'>
<br /><br /><br />
</div>

<br /><br />



    <div className='px-10  sm:px-20 md:px-28 text-white '>
      {/* flex flex-col md:flex-col lg:flex-col xl:flex-row 2xl:flex-row */}
      <div className="rounded-3xl p-7 md:p-16 lg:p-24 border-r-8 bg-[#7D75D8]  grid xl:grid-cols-2 md:items-center">
        <img className="md:mr-20  mt-[-100px] sm:mt-[-150px] md:mt-[-230px] lg:mt-[-230px] xl:mt-[-280px] 2xl:mt-[-200px]  max-w-full md:max-w-none" src={publish} alt="Publish" />
        <div className=" text-left sm:text-center md:text-left">
          <br />
          <h2 className="font-serif text-[40px] sm:text-5xl">Publish a book NFT</h2><br />
          <p className=" text-xl w-4/5 md:text-2xl ">Duis non orci justo. Nulla lobortis, elit ac imperdiet mollis, nisi ante blandit ligula, vel elementum urna velit eu lorem</p><br />
          <button className="flex rounded-lg works py-4 px-7 sm:py-3 sm:px-12  sm:text-[20px] text-center font-semibold ">PUBLISH WORKS <svg className="ml-3 md:mt-1 w-6 h-6 rotate-90 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg> </button>      
<br />
      </div>
    </div> 
  </div>

<div className='hidden sm:block'>
<br /><br /><br /><br /><br /><br />
</div>

 
</div>
  )
}

export default Publish