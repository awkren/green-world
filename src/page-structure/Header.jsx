import React, { useState, useEffect } from 'react'
import {FaTimes,FaBars} from 'react-icons/fa'
import '../page-style/Header.css'

export default function Header(){

  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    const cryptoLogoText = document.querySelectorAll<HTMLElement>('.crypto-logo-text');
    setToggleMenu(!toggleMenu);
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth);
    }
  }, []);

  return (
    <section className='wrapper'>
      <nav>
          <p className="crypto-logo-text">Green World</p>
          {(toggleMenu || screenWidth > 940) && (
            <ul className='list'>
                <li className='items'><a href='/'>Help the planet</a></li>
                <li className='items'><a href='/'>plant a tree</a></li>
                <li className='crypto-logo-text-mobile'>Green World</li>
                <li className='items'>g-conf</li>
                <li className='items'>about us</li>
            </ul>
          )}
          {/* <button onClick={toggleNav} className='btn'>BTN</button> */}
          <div className='btn' onClick={toggleNav}>
            {toggleMenu ? (<FaTimes size={20} style={{color: '#000'}}/>) : (<FaBars size={20} style={{color: '#000'}}/>)}
          </div>
      </nav>
    </section>
  )
}

