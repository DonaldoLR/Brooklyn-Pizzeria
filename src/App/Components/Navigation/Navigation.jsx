import React from 'react';
import Logo from '../../Assets/Vincent_Logo.svg';
const Navigation = () => {
  return (
    <header>
      <nav class='navbar navbar-dark bg-dark'>
        <div class='container'>
          <a class='navbar-brand' href='#'>
            <img src={Logo} alt='' width='120' height='67.5' />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
