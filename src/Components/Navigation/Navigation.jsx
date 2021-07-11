import React, { useState } from 'react';
import Logo from '../../Assets/Vincent_Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navigation = () => {
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
  const toggleMenu = () => {
    setDisplayMobileMenu(!displayMobileMenu);
  };
  const toggleMenuStyle = {
    display: displayMobileMenu ? 'flex' : '',
  };
  return (
    <header>
      <nav className='container'>
        <button
          className={
            displayMobileMenu
              ? 'nav-hamburger hamburger hamburger--collapse is-active'
              : 'nav-hamburger hamburger hamburger--collapse'
          }
          type='button'
          onClick={toggleMenu}
        >
          <span className='hamburger-box'>
            <span className='hamburger-inner'></span>
          </span>
        </button>
        <img
          className='nav-logo'
          src={Logo}
          alt='Logo'
          width='120px'
          height='67.5px'
        />
        {/* <div className='nav-logo'>
          <img src={Logo} alt='Logo' width='120px' height='67.5px' />
        </div> */}
        <div className='nav-links' style={toggleMenuStyle}>
          <ul>
            <li className='nav-item'>Home</li>
            <li className='nav-item'>Menu</li>
            <li className='nav-item'>Order</li>
            <li className='nav-item'>Contact</li>
          </ul>
        </div>
        <div className='nav-cart'>
          <FontAwesomeIcon icon='pizza-slice' size='2x' color='white' />
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
