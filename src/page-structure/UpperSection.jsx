import React from 'react'
import '../page-style/UpperSection.css'
import earthImg from '../assets/imgs/resp.png'
import earthSecond from '../assets/imgs/earth.png'
import manPlanting from '../assets/imgs/manplanting.jpeg'
const UpperSection = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center w-[90%] text-center m-auto'>
        <p>Painting the Earth green once again!</p>
        <p>Since 2015, we are showing you how planting a single tree can save millions of lives</p>
        <p className=''><span className='bg-black text-white p-1'>I want to plant a tree</span></p>
      </div>
      <img src={earthImg} alt='/'/>
      <div>
        <p>Our mission is to make the world a better place, for us, and for our future generations</p>
        <p>We planted more than 56750 trees since when we started this mission</p>
        <p>We travel from country to country, giving speeches at schools, universities and companies, showing how a simple act of planting a single tree can benefit us in a near future</p>
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