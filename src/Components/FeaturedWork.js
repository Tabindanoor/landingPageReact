import React from 'react'
import moby from '../images/moby.png'
import thewar from '../images/thewar.png'
import league from '../images/league.png'
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

      <div>
    
<br />
<div className='flex flex-col md:flex-row  text-center lg:px-28 md:px-16 sm:text-[40px] text-2xl '>
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


        

    <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-7 sm:pr-0  sm:pl-16 lg:pl-28 -mt-20 sm:-mt-0 ">
    <div className="w-full relative flex items-center justify-center">



        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
            <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                    <img src={moby} alt="black chair and white table" className="object-cover object-center w-full" />
                    
                </div>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                    <img src={thewar} alt="sitting area" className="object-cover object-center w-full" />
                    
                </div>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                    <img src={league} alt="sitting area" className="object-cover object-center w-full" />
                    
                </div>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                    <img src={moby} alt="sitting area" className="object-cover object-center w-full" />
                    
                </div>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                    <img src={thewar} alt="black chair and white table" className="object-cover object-center w-full" />
                    
                </div>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                    <img src={league} alt="sitting area" className="object-cover object-center w-full" />
                    
                </div>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                    <img src={moby} alt="sitting area" className="object-cover object-center w-full" />
                    
                </div>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                    <img src={thewar} alt="sitting area" className="object-cover object-center w-full" />
                    
                </div>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                    <img src={league} alt="black chair and white table" className="object-cover object-center w-full" />
                    
                </div>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                    <img src={moby} alt="sitting area" className="object-cover object-center w-full" />
                    
                </div>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                    <img src={thewar} alt="sitting area" className="object-cover object-center w-full" />
                    
                </div>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                    <img src={league} alt="sitting area" className="object-cover object-center w-full" />
                    
                </div>
            </div>
        </div>
       
    </div>
</div>



</div>
    


  )
}

export default FeaturedWork







