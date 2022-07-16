import React from 'react';
import { Link } from 'react-router-dom';
import weatherIcon from './img/weatherIcon.png';

export const NavBar = () => {
  const text = 'Let\'s check the weather!';
  const handleHidden = (e) => {
    e.target.remove();
    e.currentTarget.remove();
  };

  return (
    <Link className='MainPage' aria-current='page' to='/home' onClick={handleHidden}>
      <div className='MainPageLink'>
        <img alt='icon' src={weatherIcon} className='LinkIcon' />
        <div className={'LinkIcon'}> <h1>{text}</h1> </div>
      </div>
    </Link>
  );
};
