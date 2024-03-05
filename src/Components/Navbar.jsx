import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.svg'
import home from '../assets/home.svg'
import search from '../assets/search.svg'
import hamburgerIcon from '../assets/hamburgerIcon.svg'

function Navbar() {
  return (
    <nav>
      <div className='NavLogo'>
        <button className="hamburger btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
          <img srcSet={hamburgerIcon} alt="" />
        </button>
        <div className="logo">
          <img alt="" srcSet={logo} />
        </div>
      </div>
      <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
        <div className="offcanvas-header ">
          <h5 className="offcanvas-title" id="staticBackdropLabel">
            <img alt="" srcSet={logo} />
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body ">
          <div>
            <ul className='text-light'>
              <li className="list home ">
                <img alt="" srcSet={home} />Home</li>
              <li className="list search">
                <img alt="" srcSet={search} />Search</li>
              <li className="list">
                Login</li>
              <li className="list">
                Sign Up</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="othersNavbar font">
        <button type="button" className='inButtons'>Sign up</button>
        <button type="button" className='inButtons'>Login</button>
      </div>
    </nav>
  )
}

export default Navbar
