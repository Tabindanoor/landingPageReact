import React from 'react'
import "../Components/Publish.css"
// import { BsDribbble } from 'react-icons/bs'
import alexndra from "../images/alexndra.png"
import publish from "../images/publish.png"
import line from "../images/line.png"
import inkpot from "../images/inkpot.png" 



const Publish = () => {
  return (
    <div className='-mt-10 bg-[#F6F6F6] sm:-mt-0'>
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
    <p className='xl:w-2/5 2xl:w-1/3 px-4 w-11/12 text-[#303365] justify-center mx-auto text-center text-2xl md:text-3xl md:w-1/2 sm:w-2/3 '>
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
      <div className="rounded-3xl p-7 md:p-16  lg:p-24  bg-[#7D75D8]  grid xl:grid-cols-2 md:items-center">
        <img className="md:mr-20  mt-[-100px] sm:mt-[-150px] md:mt-[-230px] lg:mt-[-230px] xl:mt-[-280px] 2xl:mt-[-200px]  max-w-full md:max-w-none" src={publish} alt="Publish" />
        <div className=" text-left sm:text-center md:text-left">
          <br />
          <h2 className="font-serif text-[40px] sm:text-5xl">Publish a book NFT</h2><br />
          <p className=" text-xl justify-start text-left md:w-11/12 lg:w-auto   2xl:w-5/6 md:text-2xl ">Duis non orci justo. Nulla lobortis, elit ac imperdiet mollis, nisi ante blandit ligula, vel elementum urna velit eu lorem</p><br />
          <button className="flex rounded-lg works py-4 px-7 sm:py-3 sm:px-12  sm:text-[20px] text-center font-semibold ">PUBLISH WORKS <svg xmlns="http://www.w3.org/2000/svg" className='mt-2 mx-2' width="37" height="16" viewBox="0 0 37 16" fill="none">
<path d="M36.7071 8.70711C37.0976 8.31659 37.0976 7.68342 36.7071 7.2929L30.3431 0.928935C29.9526 0.53841 29.3195 0.53841 28.9289 0.928935C28.5384 1.31946 28.5384 1.95262 28.9289 2.34315L34.5858 8L28.9289 13.6569C28.5384 14.0474 28.5384 14.6805 28.9289 15.0711C29.3195 15.4616 29.9526 15.4616 30.3431 15.0711L36.7071 8.70711ZM-8.74228e-08 9L36 9L36 7L8.74228e-08 7L-8.74228e-08 9Z" fill="white"/>
</svg></button>      
<br />
<br />
      </div>
    </div> 
  </div>

<div className='block'>
<br /><br /><br /><br />
</div>

 
</div>
  )
}
 export default Publish