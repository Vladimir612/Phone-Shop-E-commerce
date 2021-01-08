import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.sass'
import logo from '../../logo.svg'
import { FaCartPlus } from 'react-icons/fa'
//import styled from 'styled-components'

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark px-sm-5'>
      {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
      <Link to='/'>
        <img src={logo} alt='store' className='navbar-brand' />
      </Link>
      <ul className='navbar-nav align-items-center'>
        <li className='nav-item ml-5'>
          <Link to='/' className='nav-link'>
            products
          </Link>
        </li>
      </ul>
      <Link to='/cart' className='ml-auto'>
        <button>
          <span className='mr-2'>
            <FaCartPlus />
          </span>
          my cart
        </button>
      </Link>
    </nav>
  )
}

export default NavBar
