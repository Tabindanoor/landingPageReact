import React from 'react'
import Edit from "../images/Edit.png"
import Send from "../images/Send.png"
import Document from "../images/Document.png"
import EditSquare from "../images/EditSquare.png"
import Paper from "../images/Paper.png"
import inkpot from "../images/inkpot.png"
import "../Components/CardSection.css"
const CardSection = () => {
  return ( 
  
    <div className='flex-col'>

    <div>
        <img src={inkpot}  alt="inkpot"  className='inkpot ml-[130px] sm:ml-[80px] h-52 sm:h-96 md:ml-[286px] lg:ml-[540px] xl:ml-[800px] 2xl:ml-[1050px]'/>
    </div>
 
    <div className='page bg-slate-200 mb-44 cards'>
       
   
      
        <br /><br /><br /><br /><br /><br />
        <div className ="headiing">
        <br /><br />
            <h1 className=' text-4xl font-serif text-center'>DISCOVER THE<span style={{color:"#7D75D8"}}> BENEFITS</span></h1>
       </div>
       <br /><br /><br />
                    <div className='flex justify-center flex-wrap gap-x-10 gap-y-20 max-sm:gap-y-10 '>
                        <div className='bg-white w-[29%] max-xl:w-[48%] max-sm:w-[90%] sm:p-10'>
                            <img src={Edit} alt="" />
                            <h1 className='font-serif text-[48px] text-[#21233B] max-sm:text-3xl py-4'>Author Cohorts</h1>
                            <h1 className=' max-sm:text-base font-sans text-[#303365] text-[20px] leading-[30px]'>Duis non orci justo. Nulla lobortis, elit ac i
                                mperdiet mollis, nisi ante blandit ligula, vel elem
                                entum urna velit eu lorem. Nullam in mauris sit amet quam
                                efficitur aliquam vel accumsan elit.</h1>
                        </div>
                        <div className='bg-white w-[29%] max-xl:w-[48%] max-sm:w-[90%] sm:p-10'>
                            <img src={Send} alt="" />
                            <h1 className='font-serif text-[40px] leading-[48px] max-sm:text-3xl py-4'>Early Access</h1>
                            <h1 className=' max-sm:text-base font-sans text-[#303365] text-[20px] leading-[30px]'>Duis non orci justo. Nulla lobortis, elit ac i
                                mperdiet mollis, nisi ante blandit ligula, vel elem
                                entum urna velit eu lorem. Nullam in mauris sit amet quam
                                efficitur aliquam vel accumsan elit.</h1>
                        </div> <div className='bg-white w-[29%] max-xl:w-[48%] max-sm:w-[90%] sm:p-10'>
                            <img src={Document} alt="" />
                            <h1 className='font-serif text-[40px] leading-[48px] max-sm:text-3xl py-4'>Platform Reader</h1>
                            <h1 className=' max-sm:text-base font-sans text-[#303365] text-[20px] leading-[30px]'>Duis non orci justo. Nulla lobortis, elit ac i
                                mperdiet mollis, nisi ante blandit ligula, vel elem
                                entum urna velit eu lorem. Nullam in mauris sit amet quam
                                efficitur aliquam vel accumsan elit.</h1>
                        </div> 
                        <div className='bg-white w-[29%] max-xl:w-[48%] max-sm:w-[90%] sm:p-10'>
                            <img src={EditSquare} alt="" />
                            <h1 className='font-serif text-[40px] leading-[48px] max-sm:text-3xl py-4'>Author Cohorts</h1>
                            <h1 className=' max-sm:text-base font-sans text-[#303365] text-[20px] leading-[30px]'>Duis non orci justo. Nulla lobortis, elit ac i
                                mperdiet mollis, nisi ante blandit ligula, vel elem
                                entum urna velit eu lorem. Nullam in mauris sit amet quam
                                efficitur aliquam vel accumsan elit.</h1>
                        </div>
                         <div className='bg-white w-[29%] max-xl:w-[48%] max-sm:w-[90%] sm:p-10'>
                            <img src={Paper} alt="" />
                            <h1 className='font-serif text-[40px] leading-[48px] max-sm:text-3xl py-4'>Early Access</h1>
                            <h1 className=' max-sm:text-base font-sans text-[#303365] text-[20px] leading-[30px]'>Duis non orci justo. Nulla lobortis, elit ac i
                                mperdiet mollis, nisi ante blandit ligula, vel elem
                                entum urna velit eu lorem. Nullam in mauris sit amet quam
                                efficitur aliquam vel accumsan elit.</h1>
                        </div>
                    </div>
                    <br /><br /><br /><br /><br />
    </div>
    

    
</div>
  )
}

export default CardSection
