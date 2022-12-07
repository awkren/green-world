import React from 'react'
import '../page-style/UpperSection.css'
import earthImg from '../assets/imgs/resp.png'
import earthSecond from '../assets/imgs/earth.png'
import manPlanting from '../assets/imgs/manplanting.jpeg'
import { FiCornerRightDown } from 'react-icons/fi'
 
const UpperSection = () => {
  return (
    <div className='flex flex-col m-auto justify-center items-center text-center w-[90%] font-[Inter]'>
      <div className='mt-[1.5rem] text-[2rem]'>
        <p className=' font-[500] leading-[2.5rem] w-[93%] m-auto text-center'>Showing you how planting a single tree can <em className='not-italic text-[#00ab5b] underline'>save millions of lives</em></p>
      </div>
      <div className='mt-[1.5rem] text-center m-auto'>
        <p className=''>There's still hope to make the Earth green once more!</p>
        <p className='w-[90%] m-auto'>We teach people around the world on how to make the world a better place to live.</p>
      </div>
      <div className='text-[#00ab5b] flex items-center justify-center align-middle mt-[1rem]'>
        <p className='mb-[.3rem] font-semibold text-[.9rem]'>Let's go</p>
        <p className='text-[.9rem]'><span></span><FiCornerRightDown/></p>
      </div>
      <div className='shadow-[0px_8px_24px_rgb(0,0,0,12%)] bg-[#00ab5b] border-black border-[1px] font-semibold text-white rounded-full w-[13rem] h-[3rem] flex justify-center items-center'>Help the planet 🌳</div>
      <div className='mt-[2rem]'>
        <img src={earthImg} alt='/'/>
      </div>
      <div className='mt-[1rem] mb-[1rem]'>
        <p className='text-[1.5rem] text-[#00ab5b] font-bold'>Our mission is to make the world a better place, for us, and for our future generations</p>
      </div>
      <div className='bg-[#00ab5b] rounded-[30px_30px_5px_5px] mb-[.5rem] h-[3.5rem] flex font-semibold text-white'>
        <p className='text-center w-[75%] m-auto'>We planted more than 56750 trees since when we started this mission</p>
      </div>
      <div className='bg-[#00ab5b] rounded-[5px_5px_30px_30px] h-[3.5rem] flex font-semibold text-white'>
        <p className='w-[85%] m-auto'>We travel from country to country, spreading the word of a greener place to live</p>
      </div>
      <div>
        <img src={earthSecond} alt='/'/>
      </div>
      <div>
        <p>The Earth breathe better, you breathe better!</p>
        <p>We are also one of the sponsors of the G-Oxygen Program, it's an Open-Source initiative to develop strategies to map areas with a low-level of oxygen around the world.</p>
        <p>Read our documentation, and see how you can help us too!</p>
      </div>
      <div>
        <p>We've travelled more than 50 countries and spread the Green World Word in more than 10 languages</p>
        <img src={manPlanting} alt='/'/>
      </div>
    </div>
  )
}

export default UpperSection