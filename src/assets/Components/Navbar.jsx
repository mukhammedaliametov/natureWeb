import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

  const [click, setState] = useState(false);
  const [navbar, setNavbar] = useState(false)

  const handleClick = () => setState(!click)
  const closeMobileMenu = () => setState(false)

  const changeBackground = () => {
    if(window.scrollY >= 60){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <div className='navbar'>
      <div className="nav-header">
        <div className="nav-contact">
          <a href="">
            <i class="fa-solid fa-envelope"></i> example@gmail.com
          </a>
          <a href="">
            <i class="fa-solid fa-phone"></i> +998(99)000-00-00
          </a>
        </div>
        <div className="nav-networks">
          <a href=""><i class="fa-brands fa-telegram"></i></a>
          <a href=""><i class="fa-brands fa-instagram"></i></a>
          <a href=""><i class="fa-brands fa-linkedin"></i></a>
          <a href=""><i class="fa-brands fa-tiktok"></i></a>
          <a href=""><i class="fa-brands fa-facebook"></i></a>
        </div>
      </div>
      <div className={navbar ? 'nav active' : 'nav'}>
        <h1 className='logo'>
          Nature <i class="fa-sharp fa-solid fa-leaf"></i>
        </h1>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <Link to='/' onClick={closeMobileMenu}>
              <i class="fa-solid fa-house"></i> Home
            </Link>
          </li>
          <li>
            <Link to='/about' onClick={closeMobileMenu}>
              <i class="fa-solid fa-circle-info"></i> About
            </Link>
          </li>
          <li>
            <Link to='/services' onClick={closeMobileMenu}>
              <i class="fa-solid fa-briefcase"></i> Services
            </Link>
          </li>
          <li>
            <Link to='/contact' onClick={closeMobileMenu}>
              <i class="fa-solid fa-address-book"></i> Contact
            </Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;