<<<<<<< HEAD
import React,{useState} from 'react';
// import bgImg from "../images/bgImg.png"
import "./Navbar.css";
import Frame from "../images/Frame.png"
import bookrank from "../images/bookrank.png"
import star from "../images/star.png"
import whiteSend from "../images/whiteSend.png"
import menuIcon from "../images/menuIcon.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
  <div className='body bg-[url("./images/mobile_bg.png")] lg:bg-[url("./images/bgImgg.png")] sm:bg-cover   bg-cover   max-sm:bg-center p-4'>

    <nav className="mt-4">
      <div className=" mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img className="w-[275px] h-[48px]" src={Frame} alt="Logo" />
          </div>
          <div className="hidden md:-ml-4 md:flex md:space-x-0  lg:space-x-6 sm:-space-x-3 mt-3 lg:ml-3 text-[20px] justify-around">
            <div href="#" className="text-white text-xl  px-3 py-2 rounded-md font-semibold">About</div>
            <div href="#" className="text-white text-xl   px-3 py-2 rounded-md font-semibold">Author</div>
            <div href="#" className="text-white text-xl   px-3 py-2 rounded-md font-semibold">Team</div>
            <div className="text-center connect text-base block py-4 pl-4 pr-4  bg-white  md:border-0   dark:text-white dark:hover:text-white  rounded-lg text-[#7D75D8] font-sans text-[16px] font-bold">CONNECT WALLET</div>
                                     
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-white-100 focus:outline-none focus:bg-white-100 focus:text-white transition duration-150 ease-in-out"
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
          <div className="connect  block py-4 pl-4 pr-4  bg-white  md:border-0  md:p-0 dark:text-white dark:hover:text-white font-semibold rounded-lg text-[#7D75D8] font-sans sm:" >CONNECT WALLET</div>
                          

          </div>
        </div>
      )}
    </nav>
    
    <br /><br />   
    <div className=''>
    <div className="leading-[48px] sm:w-[100%] flex flex-col lg:flex-row  lg:px-12 ">
      <div className='px-5 sm:px-4 md:px-9 mt-14  lg:w-[50%] '>
      <h1 className='text-white font-serif text-[40px] lg:text-7xl xl:text-8xl  md:text-7xl sm:text-8xl font-regular'>Your books on-chain</h1>
      <br />
      <p className='text-white text-xl md:text-4xl  lg:text-3xl sm:text-3xl    font-sans font-regular'>The storefront you need to publish and sell books as NFTs</p>
      <br />
      <div className="sm:flex text-center">
        <button className=' text-[20px] text-center flex  sm:w-[223px] h-14 w-[100%] items-center font-semibold text-xl justify-center text-white  explore rounded-lg sm:py-4 sm:px-12 mr-8 '> 
         <img src={whiteSend} alt="" /> <h1>EXPLORE</h1>
         </button>

        <button className='mt-4  text-[20px] sm:mt-0 sm:w-44 h-14 w-[100%] bg-indigo-900 sm:bg-white font-bold  text-[#7D75D8] text-xl rounded-lg'>PUBLISH</button>
      </div>
      </div>
    

      <div className='sm:w-[100%] lg:w-[50%]' >
      <img src={bookrank} alt="" />
      </div>
    </div>
</div>




<br /><br />

  </div >
  )
}

export default Navbar

=======
import React,{useState} from 'react';
// import bgImg from "../images/bgImg.png"
import "./Navbar.css";
import Frame from "../images/Frame.png"
import bookrank from "../images/bookrank.png"
import star from "../images/star.png"
import whiteSend from "../images/whiteSend.png"
import menuIcon from "../images/menuIcon.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
  <div className='body bg-[url("./images/bgImg.png")]  py-5 md:px-2 sm:px-2'>

    <nav className="mt-4">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center ml-5">
            <img className="h-8 w-auto" src={Frame} alt="Logo" />
          </div>
          <div className="hidden sm:-ml-4 sm:flex md:space-x-6 sm:-space-x-3 mt-3 lg:ml-3">
            <div href="#" className="text-white  px-3 py-2 rounded-md font-medium text-lg">About</div>
            <div href="#" className="text-white  px-3 py-2 rounded-md font-medium text-lg">Author</div>
            <div href="#" className="text-white  px-3 py-2 rounded-md font-medium text-lg">Team</div>
            <div className="connect block py-3 pl-4 pr-4 rounded bg-white  md:border-0  md:p-0 dark:text-white dark:hover:text-white" style={{color:"#7D75D8"}}>CONNECT WALLET</div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-white-100 focus:outline-none focus:bg-white-100 focus:text-white transition duration-150 ease-in-out"
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
        <div className="sm:hidden">
          <div className="pt-2 pb-4 font-medium ">
            <div  className="block text-white px-3 py-2 rounded-md text-lg">About</div>
            <div href="#" className="block text-white px-3 py-2 rounded-md text-base font-medium">Author</div>
            <div href="#" className="block text-white px-3 py-2 rounded-md text-base font-medium mt-3  pl-3 pr-4  hover:bg-white-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent">Team</div>
          <div className="connect  block py-3 pl-4 pr-4 rounded bg-white  md:border-0  md:p-0 dark:text-white dark:hover:text-white  " style={{color:"#7D75D8"}}>CONNECT WALLET</div>

          </div>
        </div>
      )}
    </nav>



























          <br /><br /> 
    
    <div className="bookchain sm:flex flex-col  sm:flex-col lg:flex-row justify-between">
      <div className='myblockchain px-4 sm:px-4 md:px-9 mt-14'>
      <h1 className='text-white font-serif text-[50px] lg:text-[100px] md:text-6xl sm:text-5xl w-3/4' style={{fontWeight:"400px"}}>Your books on-chain</h1>
      <p className='text-white text-[24px] text-3xl md:text-4xl sm:text-2xl  font-serif w-3/4' style={{fontWeight:"400px"}}>The storefront you need to publish and sell books as NFTs</p>
      <br /><br />
      <div className="buttons sm:flex w-[100%] ">
        <button className='text-white mr-5 explore '>  <img src={whiteSend} alt="" /> EXPLORE</button>
        <button className='publish sm:bg-white' style={{color:"#7D75D8"}}>PUBLISH</button>
      </div>
      </div>
      <br /><br /><br /><br /><br />
      <div className='bookrank mr-16'>
      <img src={bookrank} alt="" className=' '  />
      </div>
    </div>

  </div >
  )
}

export default Navbar

>>>>>>> d63506f6ed89b5860fb84c45f86d0f8a55da12c3
// sm:w-[100%] md:w-[100%] lg:w-[50%]