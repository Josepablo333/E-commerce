import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import './styles/style.css'

const Header = () => {

  const navbar = useRef()

  const handleHamClick = () => {
    navbar.current.classList.toggle('header__nav--close')
  }

  return (
    <header className="header">
      <NavLink className='header__logo-navlink' to="/">
      <i class="header__logo fa-solid fa-house"></i><h1 className="header__logo">e-commerce</h1>
      </NavLink>
      <i onClick={handleHamClick} className="fa-solid fa-bars header__menu-ham"></i>
      <nav ref={navbar} className="header__nav header__nav--close">
        <ul className="header__list">
          <li className="header__item">
            <NavLink 
              className={({isActive}) => isActive ? 'header__navlink active-link': 'header__navlink'} 
              to="/login"
            >
            <i class="fa-solid fa-user-large"></i>
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink 
              className={({isActive}) => isActive ? 'header__navlink active-link' : 'header__navlink'}
              to="/purchases"
            >
            <i class="fa-solid fa-box-archive"></i>
            </NavLink>
          </li>
          <li className="header__item">
          <NavLink 
              className={({isActive}) => isActive ? 'header__navlink active-link' : 'header__navlink'}
              to="/cart"
            >
            <i class="fa-solid fa-cart-shopping"></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
