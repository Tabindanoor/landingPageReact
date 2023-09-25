import React from 'react'
import moby from '../images/moby.png'
import thewar from '../images/thewar.png'
import league from '../images/league.png'
import mob from "../images/mob.png"
// import half from '../images/half.png'
import "./FeaturedWork.css"
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";


const FeaturedWork = () => {
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


  return (      

      <div className='bg-[#F6F6F6] '>
<br /> 
<br />
<div className='flex flex-col md:flex-row  font-prata box-border text-center lg:px-24  md:px-20 sm:text-[40px] text-2xl '>
          <div className='font-serif ' >
            <p>FEATURED<span className="text-[#7D75D8]"> WORKS</span></p>
            <br />
          </div>

            <div className='md:absolute sm:right-0 md:mx-20 lg:mx-24 text-[#7D75D8]'>
              <button onClick={goPrev} aria-label="slide backward" className="mr-2 focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="24" viewBox="0 0 56 24" fill="none">
<path d="M0.939339 13.0607C0.353554 12.4749 0.353554 11.5251 0.939339 10.9393L10.4853 1.3934C11.0711 0.807615 12.0208 0.807615 12.6066 1.3934C13.1924 1.97919 13.1924 2.92894 12.6066 3.51472L4.12132 12L12.6066 20.4853C13.1924 21.0711 13.1924 22.0208 12.6066 22.6066C12.0208 23.1924 11.0711 23.1924 10.4853 22.6066L0.939339 13.0607ZM56 13.5L2 13.5L2 10.5L56 10.5L56 13.5Z" fill="#7D75D8"/>
</svg>
        </button>

        <button  onClick={goNext} aria-label="slide forward" className="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="24" viewBox="0 0 56 24" fill="none">
<path d="M55.0607 13.0607C55.6464 12.4749 55.6464 11.5251 55.0607 10.9393L45.5147 1.3934C44.9289 0.807615 43.9792 0.807615 43.3934 1.3934C42.8076 1.97919 42.8076 2.92894 43.3934 3.51472L51.8787 12L43.3934 20.4853C42.8076 21.0711 42.8076 22.0208 43.3934 22.6066C43.9792 23.1924 44.9289 23.1924 45.5147 22.6066L55.0607 13.0607ZM-1.31134e-07 13.5L54 13.5L54 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z" fill="#7D75D8"/>
</svg>
        </button>
            </div>
          </div>


        

    <div className="flex items-center  justify-center  w-full h-full py-24  sm:py-8 px-7 sm:pr-0  sm:pl-16 md:pl-20 lg:pl-24 -mt-20 sm:-mt-0 ">
    <div className="w-full relative flex items-center justify-center">



        <div className="w-full h-full  mx-auto overflow-x-hidden overflow-y-hidden">
            <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center  justify-start transition ease-out duration-700">
                <div className="flex shadow-2xl hidden sm:block rounded-lg flex-shrink-0 relative w-full sm:w-auto">
                    <img src={moby} alt="black chair and white table" className="object-cover shadow-xl object-center w-full" />
                    
                </div>

                <div className='sm:hidden bg-[#7D75D8] rounded-lg text-white p-5'>
                    <img src={mob} alt="" />
                    <br />
                    <p className='font-bold '>The War of The Worlds</p>
                    {/* <br /> */}

                    <p className='text-[14px] mt-3 font-open-sans'>H.G. Wells | Collector's Edition</p>
                    <br />  
                    <div className='flex justify-between'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="6" viewBox="0 0 21 6" fill="none">
<circle cx="2.5" cy="3" r="2.5" fill="white"/>
<circle cx="10.5" cy="3" r="2.5" fill="white"/>
<circle cx="18.5" cy="3" r="2.5" fill="white"/>
</svg>

    <div >
    
<div className='flex  -mt-3 justify-between'>
<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
<g clip-path="url(#clip0_1_1353)">
<path d="M11.6966 10.1875L6.00035 13.8125L0.300354 10.1875L6.00035 0L11.6966 10.1875ZM6.00035 14.9766L0.300354 11.3516L6.00035 20L11.7003 11.3516L6.00035 14.9766Z" fill="#88ADDC"/>
<path d="M11.6966 10.1875L6.00035 13.8125L0.300354 10.1875L6.00035 0L11.6966 10.1875ZM6.00035 14.9766L0.300354 11.3516L6.00035 20L11.7003 11.3516L6.00035 14.9766Z" fill="white" fill-opacity="0.3"/>
</g>
<defs>
<clipPath id="clip0_1_1353">
<rect width="12" height="20" fill="white"/>
</clipPath>
</defs>
</svg> 

<p className='mx-2'>0.25 ETH</p>
</div>

    </div>

                    </div>
                    
                </div>

                <div className="flex bg-white shadow-2xl hidden sm:block rounded-lg flex-shrink-0 relative w-full sm:w-auto">
                    <img src={thewar} alt="sitting area" className="object-cover shadow-xl object-center w-full" />
                    
                </div>





                <div className="flex  bg-white shadow-2xl hidden sm:block rounded-lg flex-shrink-0 relative w-full sm:w-auto">
                    <img src={league} alt="sitting area" className="object-cover shadow-xl object-center w-full" />
                    
                </div>
                <div className="flex shadow-2xl hidden sm:block rounded-lg flex-shrink-0 relative w-full sm:w-auto">
                    <img src={moby} alt="sitting area" className="object-cover shadow-xl object-center w-full" />
                    
                </div>
                <div className="flex shadow-2xl hidden sm:block rounded-lg flex-shrink-0 relative w-full sm:w-auto">
                    <img src={thewar} alt="black chair and white table" className="object-cover shadow-xl object-center w-full" />
                    
                </div>
                <div className="flex shadow-2xl hidden sm:block rounded-lg flex-shrink-0 relative w-full sm:w-auto">
                    <img src={league} alt="sitting area" className="object-cover shadow-xl object-center w-full" />
                    
                </div>
                <div className="flex shadow-2xl hidden sm:block rounded-lg flex-shrink-0 relative w-full sm:w-auto">
                    <img src={moby} alt="sitting area" className="object-cover shadow-xl object-center w-full" />
                    
                </div>
                <div className="flex shadow-2xl hidden sm:block rounded-lg flex-shrink-0 relative w-full sm:w-auto">
                    <img src={thewar} alt="sitting area" className="object-cover shadow-xl object-center w-full" />
                    
                </div>
                <div className="flex shadow-2xl hidden sm:block rounded-lg flex-shrink-0 relative w-full sm:w-auto">
                    <img src={league} alt="black chair and white table" className="object-cover shadow-xl object-center w-full" />
                    
                </div>
                <div className="flex shadow-2xl hidden sm:block rounded-lg flex-shrink-0 relative w-full sm:w-auto">
                    <img src={moby} alt="sitting area" className="object-cover shadow-xl object-center w-full" />
                    
                </div>
                <div className="flex shadow-2xl hidden sm:block rounded-lg flex-shrink-0 relative w-full sm:w-auto">
                    <img src={thewar} alt="sitting area" className="object-cover shadow-xl object-center w-full" />
                    
                </div>
                <div className="flex shadow-2xl hidden sm:block rounded-lg flex-shrink-0 relative w-full sm:w-auto">
                    <img src={league} alt="sitting area" className="object-cover shadow-xl object-center w-full" />
                    
                </div>
            </div>
        </div>
       
    </div>
</div>


</div>
    


  )
}

export default FeaturedWork



