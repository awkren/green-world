import React from 'react'
import '../page-style/SecondSection.css'
import naTech from '../assets/imgs/naturetech4.png'
import hug from '../assets/imgs/test.png'
import { BsFillTreeFill } from 'react-icons/bs'

const SecondSection = () => {
  return (
    <div className='main-sec flex flex-col m-auto justify-center items-center text-center w-[90%] font-[Inter]'>
      <div className='mt-[1rem] '>
        <p className='font-semibold text-justify '>It doesn't matter where you're from, talk to us and we'll go to your city too!</p>
        <form className='flex flex-col rounded-[10px] gap-[1rem] w-[80%] m-auto mt-[1rem]'>
          <label className='text-left'>Your Name</label>
          <input className='border-b-[1px] bg-[#f2faf6] h-[2rem] pl-[.5rem] rounded-[5px_5px_0px_0px]' type='text'/>
          <label className='text-left'>Your City</label>
          <input className='border-b-[1px] bg-[#f2faf6] h-[2rem] pl-[.5rem] rounded-[5px_5px_0px_0px]' type='text'/>
          <label className='text-left'>Email</label>
          <input className='border-b-[1px] bg-[#f2faf6] h-[2rem] pl-[.5rem] rounded-[5px_5px_0px_0px]' type='email'/>
          <label className='text-left'>Country</label>
          <input className='border-b-[1px] bg-[#f2faf6] h-[2rem] pl-[.5rem] rounded-[5px_5px_0px_0px]' type='text'/>
          <button className='bg-[#00ab5b] text-white rounded-[10px] h-[3rem] font-semibold shadow-[0px_8px_24px_rgb(0,0,0,12%)]'>I want to contribute!</button>
        </form>
      </div>
      <div className='ever-wondered'>
        <div className='left-wonder'>
          <p className='wonder text-[1.5rem] font-bold mt-[1rem]'>Ever wondered how <em className='not-italic underline decoration-[#00ab5b]'>technology</em> can work <em className='not-italic underline decoration-[#00ab5b]'>together with nature?</em></p>
          <p className='mb-[1rem] font-semibold text-[1.1rem] mt-[.5rem] think '>We thought about it in the past, and we developed the <em className='not-italic decoration-white underline font-bold'>Forest Tracking App</em></p>
          <p className='mb-[.5rem]'>It's able to track forests around the globe by using AI and satellite images to compare past data with present images from those forests, and we can also predict how that forest would grow or not in a 5, 10 or 15 year span in the future!</p>
        </div>
        <div className='right-wonder'>
          <img src={naTech} className='img-tech' alt='/'/>
        </div>
      </div>
      <div className='brazil mt-[1rem]'>
        <div className='right-brazil'>
          <p className='text-[1.5rem] font-bold '>🌳 Our impact in Brazil 🌳</p>
          <p className='text-[1.1rem] font-semibold mt-[.5rem]'>Brazil is home for the biggest rainforest in the World, and we proudly say that <em className=''>helping the Amazon Rainforest has been one of our main goals throughout the years.</em></p>
          <div className='mt-[1rem]'>
            <p className=''>We were recognized as Amazon Rainforest Brother by the brazilian government, that's the highest title for a NGO to receive</p>
            <div className='second-border h-[1px] w-[40%] bg-[#bfe9d5] border-black mt-[1rem] mb-[1rem] m-auto'></div>
            <p className='mb-[1rem] font-semibold italic'>Here are some of the things we did to help the world's biggest forest:</p>
            <div className='flex flex-col gap-[.5rem] m-auto'>
              <div className='flex items-center'><BsFillTreeFill size={'1.5rem'} color={'#00ab5b'}/> <p className='tips w-[90%]'>Increased the quality of the oxygen in that area by 48%</p></div>
              <div className='flex items-center'><BsFillTreeFill size={'1.5rem'} color={'#00ab5b'}/> <p className='tips w-[90%]'>Extended the length of the forest by 5.7 miles</p></div>
              <div className='flex items-center'><BsFillTreeFill size={'1.5rem'} color={'#00ab5b'}/> <p className='tips w-[90%]'>Worked with natives, and instructed them about our mission</p></div>
            </div>
          </div>
        </div>
        <div className='left-brazil mt-[1rem] text-[#00ab5b] bg-[#f2faf6] rounded-[20px]'>
          <p className='text-[1.3rem] text-center font-bold m-[1rem] green-world'>We believe that together, we can make the world green once again</p>
          <img className='br-img' src={hug} alt='/'/>
        </div>
      </div>
    </div>
  )
}

export default SecondSection