import React from 'react'
import '../page-style/Header.css'

export default function Header(){

  return (
    <section className='wrapper'>
      {/* mobile nav */}
      <nav className='nav-desktop flex w-[50%] justify-around m-auto items-center'>
        <p className='text-[1.5rem] text-white font-bold underline'>About Us</p>
        <p className=' text-white font-bold tlogo text-[2rem]'>Green World</p>
        <p className='text-[1.5rem] text-white font-bold underline'>Contact Us</p>
      </nav>
      {/* desktop nav */}
      <nav className='nav-mobile flex w-[50%] justify-around m-auto items-center'>
        <p className='text-[1.1rem] text-white font-bold underline'>About</p>
        <p className='text-[1.4rem] text-white font-bold'>GW</p>
        <p className='text-[1.1rem] text-white font-bold underline'>Contact</p>
      </nav>
    </section>
  )
}

