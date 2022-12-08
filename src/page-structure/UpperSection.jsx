import React from 'react'
import '../page-style/UpperSection.css'
import earthImg from '../assets/imgs/resp.png'
import earthSecond from '../assets/imgs/earth.png'
import manPlanting from '../assets/imgs/manplanting.jpeg'
import { FiCornerRightDown, FiCornerDownRight } from 'react-icons/fi'
import {IoMdArrowRoundForward} from 'react-icons/io'
 
const UpperSection = () => (
  <div className='flex flex-col m-auto justify-center items-center text-center w-[90%] font-[Inter]'>
    <div className='mt-[1.5rem] text-[2rem]'>
      <p className=' font-[500] leading-[2.5rem] m-auto text-center'>Showing you how planting a single tree can <em className='not-italic text-[#00ab5b] underline'>save millions of lives</em></p>
    </div>
    <div className='mt-[1.5rem] text-center m-auto'>
      <p className='w-[95%]'>There's still hope to make the Earth green once more!</p>
      <p className='w-[95%] m-auto'>We teach people around the world on how to make the world a better place to live.</p>
    </div>
    <div className='text-[#00ab5b] flex items-center justify-center align-middle mt-[1rem]'>
      <p className='mb-[.3rem] font-semibold text-[.9rem]'>Let's go</p>
      <p className='text-[.9rem]'><span></span><FiCornerRightDown /></p>
    </div>
    <div className='shadow-[0px_8px_24px_rgb(0,0,0,12%)] bg-[#00ab5b] border-black border-[1px] font-semibold text-white rounded-full w-[13rem] h-[3rem] flex justify-center items-center'>Help the planet 🌳</div>
    <div className='mt-[2rem]'>
      <img src={earthImg} alt='/' />
    </div>
    <div className='mt-[1rem] mb-[1rem]'>
      <p className='text-[1.5rem] text-[#00ab5b] font-bold'>Our mission is to make the world a better place, for us, and for our future generations</p>
    </div>
    <div className='bg-[#00ab5b] rounded-[30px_30px_5px_5px] mb-[.5rem] h-[3.5rem] flex font-semibold text-white'>
      {/* <p className='flex items-center ml-[1rem]'>🌳</p> */}
      <p className='text-center w-[75%] m-auto'>We planted more than 56750 trees since when we started this mission</p>
    </div>
    <div className='bg-[#00ab5b] rounded-[5px_5px_30px_30px] h-[3.5rem] flex font-semibold text-white'>
      <p className='w-[85%] m-auto'>We travel from country to country, spreading the word of a greener place to live</p>
    </div>
    <div>
      <img src={earthSecond} alt='/' />
    </div>
    <div>
      <p className='text-[1.8rem] w-[95%] mb-[1rem]'>The Earth breathe better, you breathe better!</p>
      <p className='text-[1.3rem]'>We are also one of the sponsors of the <em className='not-italic text-[#00ab5b] font-semibold'>G-Oxygen Program</em>, it's an <em className='decoration-[#00ab5b] underline not-italic'><em>Open-Source</em> initiative</em> to develop strategies to map areas with a low-level of oxygen around the world.</p>
    </div>
    <div className='h-[1px] w-[20%] bg-[#bfe9d5] border-black mt-[1rem] mb-[1rem]'></div>
    <div className='flex items-center'>
      <p className='text-[#00ab5b]'><IoMdArrowRoundForward/></p>
      <p className='text-[#00ab5b] font-semibold m-auto text-[1.1rem]'>Read our documentation</p>
    </div>
      <p className='font-semibold text-[1.1rem]'>and see how you can help us too!</p>
    <div className='h-[1px] w-[40%] bg-[#bfe9d5] border-black mt-[1rem] mb-[1rem]'></div>
    <div className=''>
      <p>We've travelled more than 50 countries and spread the Green World Word in more than 10 languages</p>
    </div>
    <div className='bg-[#bfe9d5] rounded-[14px] flex justify-center shadow-[0px_8px_24px_rgb(127,213,173,30%)]'>
      <img src={manPlanting} alt='/' className=' rounded-[14px]' />
    </div>
  </div>
)

export default UpperSection