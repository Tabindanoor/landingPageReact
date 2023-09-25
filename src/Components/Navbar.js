
import React,{useState} from 'react';
// import bgImg from "../images/bgImg.png"
import "./Navbar.css";
import Frame from "../images/Frame.png"
import bookrank from "../images/bookrank.png"
import star from "../images/star.png"
import whiteSend from "../images/whiteSend.png"
import menuIcon from "../images/menuIcon.png"
import FeaturedWork from './FeaturedWork';
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import moby from '../images/moby.png'
import thewar from '../images/thewar.png'
import league from '../images/league.png'


let defaultTransform = 0;
function goNext() {
  
    defaultTransform = defaultTransform - 398;
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}
function goPrev() {
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
    else defaultTransform = defaultTransform + 398;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
  <div className='bg-[url("./images/mobile_bg.png")] bg-[bg-gradient-to-b from-purple-600 to-pink-300]  lg:bg-[url("./images/bgImgg.png")] sm:bg-cover bg-cover       max-sm:bg-center p-3 sm:p-4'>

    <nav className="sm:mt-4">
      <div className=" mx-auto  sm:px-6 lg:px-20">
        <div className="flex justify-between">
          <div className="flex-shrink-0 flex items-center">
            <img className=" w-[113px] h-[20px] sm:w-[275px] sm:h-[48px]" src={Frame} alt="Logo" />
          </div>
          <div className="hidden md:-ml-4 md:flex md:space-x-0  lg:space-x-6 sm:-space-x-3 mt-3 lg:ml-3 text-[20px] justify-around">
            <div href="#" className="text-white text-xl  px-3 py-2 rounded-md font-semibold">About</div>
            <div href="#" className="text-white text-xl   px-3 py-2 rounded-md font-semibold">Author</div>
            <div href="#" className="text-white text-xl   px-3 py-2 rounded-md font-semibold">Team</div>
            <div className="text-center connect text-base block py-4 pl-4 pr-4  bg-white  md:border-0   dark:text-white dark:hover:text-white  rounded-lg text-[#7D75D8] font-sans text-[16px] font-bold">CONNECT WALLET</div>
                                     
          </div>
          <div className="text-center md:hidden  ml-9  connect my-7 block py-2 px-4 text-sm    bg-white  md:border-0   dark:text-white dark:hover:text-white  rounded-lg text-[#7D75D8] font-sans text-[16px] font-bold">SELECT WALLET</div>

          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white   focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-4 font-medium ">
            <div  className="block text-white px-3 py-2 rounded-md text-lg">About</div>
            <div href="#" className="block text-white px-3 py-2 rounded-md  font-medium text-lg">Author</div>
            <div href="#" className="block text-white px-3 py-2 rounded-md text-lg font-medium mt-3  pl-3 pr-4  hover:bg-white-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent">Team</div>
          {/* <div className="connect  block py-4 pl-4 pr-4  bg-white  md:border-0  md:p-0 dark:text-white dark:hover:text-white font-semibold rounded-lg text-[#7D75D8] font-sans sm:" >CONNECT WALLET</div> */}
                          

          </div>
        </div>
      )}
    </nav>
    
    {/* <br /><br />    */}


    <div className=''>
    <div className=" sm:w-[100%] flex justify-between flex-col-reverse lg:flex-row  lg:pl-12 ">
      <div className='px-5 sm:px-4 md:px-9 mt-12 lg:mt-48   '>
      <h1 className='text-white text-[40px]  xl:text-8xl font-prata  md:w-2/3 lg:w-3/4 2xl:w-2/3 text-outline-black decoration-slate-500 decoration-2 leading-[120%] drop-shadow-xl shadow-black md:text-7xl sm:text-8xl font-regular'>Your books on-chain</h1>
      {/* <br /> */}
      <p className='text-white text-xl md:text-4xl mt-3 lg:text-3xl sm:text-3xl leading-10 sm:w-4/5 md:w-5/6 lg:w-auto  xl:w-3/4 2xl:w-2/3  font-sans font-regular'>The storefront you need to publish and sell books as NFTs</p>
      <br />
      <div className="sm:flex text-center sm:mt-5">
        <button className=' text-[20px] text-center flex  sm:w-[223px] h-14 w-[100%] items-center font-semibold text-xl justify-center text-white  explore rounded-lg sm:py-4 sm:px-12 mr-8 '> 
         <img src={whiteSend} className='mx-2' alt="" /> <h1>EXPLORE</h1>
         </button>

        <button className='mt-4  text-[20px] sm:mt-0 sm:w-44 h-14 w-[100%] bg-indigo-900 sm:bg-white font-bold  text-[#7D75D8] text-xl rounded-lg'>PUBLISH</button>
      </div>
      </div>
    

      <div className=' sm:mt-12 md:mt-28  mx-auto px-4' >
      <img src={bookrank}  alt="" />
      </div>

    </div>
</div>



<div className='hidden sm:block'>
<br /><br />

</div>


{/* <FeaturedWork/> */}

{/* <div className=''>
    
    <br />
    <div className='flex flex-col md:flex-row box-border text-center lg:px-28  md:px-16 sm:text-[40px] text-2xl '>
              <div className='font-serif ' >
                <p>FEATURED<span className="text-[#7D75D8]"> WORKS</span></p>
                <br />
              </div>
    
                <div className='md:absolute sm:right-0 md:mx-20 lg:mx-20 text-[#7D75D8]'>
                  <button onClick={goPrev} aria-label="slide backward" className="mr-2 focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                <BsArrowLeft/>
            </button>
    
            <button  onClick={goNext} aria-label="slide forward" className="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                  <BsArrowRight/>
            </button>
                </div>
              </div>
    
    
            
    
        <div className="flex items-center  justify-center  w-full h-full py-24  sm:py-8 px-7 sm:pr-0  sm:pl-16  -mt-20 sm:-mt-0 ">
        <div className="w-full relative flex items-center justify-center">
    
    
    
            <div className="w-full h-full  shadow-xl mx-auto overflow-x-hidden overflow-y-hidden">
                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center  justify-start transition ease-out duration-700">
                    <div className="flex shadow-2xl rounded-lg flex-shrink-0 relative w-full sm:w-auto">
                        <img src={moby} alt="black chair and white table" className="object-cover shadow-xl  object-center w-full" />
                        
                    </div>
                    <div className="flex bg-white shadow-2xl rounded-lg flex-shrink-0 relative w-full sm:w-auto">
                        <img src={thewar} alt="sitting area" className="object-cover shadow-xl  object-center w-full" />
                        
                    </div>
                    <div className="flex  bg-white shadow-2xl rounded-lg flex-shrink-0 relative w-full sm:w-auto">
                        <img src={league} alt="sitting area" className="object-cover shadow-xl  object-center w-full" />
                        
                    </div>
                    <div className="flex shadow-2xl rounded-lg flex-shrink-0 relative w-full sm:w-auto">
                        <img src={moby} alt="sitting area" className="object-cover shadow-xl  object-center w-full" />
                        
                    </div>
                    <div className="flex shadow-2xl rounded-lg flex-shrink-0 relative w-full sm:w-auto">
                        <img src={thewar} alt="black chair and white table" className="object-cover shadow-xl  object-center w-full" />
                        
                    </div>
                    <div className="flex shadow-2xl rounded-lg flex-shrink-0 relative w-full sm:w-auto">
                        <img src={league} alt="sitting area" className="object-cover shadow-xl  object-center w-full" />
                        
                    </div>
                    <div className="flex shadow-2xl rounded-lg flex-shrink-0 relative w-full  sm:w-auto">
                        <img src={moby} alt="sitting area" className="object-cover shadow-xl  object-center w-full" />
                        
                    </div>
                    <div className="flex shadow-2xl rounded-lg flex-shrink-0 relative w-full  sm:w-auto">
                        <img src={thewar} alt="sitting area" className="object-cover shadow-xl  object-center w-full" />
                        
                    </div>
                    <div className="flex shadow-2xl rounded-lg flex-shrink-0 relative w-full  sm:w-auto">
                        <img src={league} alt="black chair and white table" className="object-cover shadow-xl  object-center w-full" />
                        
                    </div>
                    <div className="flex shadow-2xl rounded-lg flex-shrink-0 relative w-full  sm:w-auto">
                        <img src={moby} alt="sitting area" className="object-cover shadow-xl  object-center w-full" />
                        
                    </div>
                    <div className="flex shadow-2xl rounded-lg flex-shrink-0 relative w-full  sm:w-auto">
                        <img src={thewar} alt="sitting area" className="object-cover shadow-xl  object-center w-full" />
                        
                    </div>
                    <div className="flex shadow-2xl rounded-lg flex-shrink-0 relative w-full  sm:w-auto">
                        <img src={league} alt="sitting area" className="object-cover shadow-xl  object-center w-full" />
                        
                    </div>
                </div>
            </div>
           
        </div>
    </div>
    
    
    
    </div> */}



<br />
  </div >
  )
}

export default Navbar
 