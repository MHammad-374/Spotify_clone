import React, { useState } from 'react'
import './Left.css'
import logo from '../assets/logo.svg'
import home from '../assets/home.svg'
import search from '../assets/search.svg'
import library from '../assets/library.svg'
import addSymbol from '../assets/addSymbol.svg'


function Left() {
  return (
    <div className='left'>
      <div className="box font">
        <img alt="" srcSet={logo} />
        <ul>
          <li className="list home ">
            <img alt="" srcSet={home} />Home</li>
          <li className="list search">
            <img alt="" srcSet={search} />Search</li>
        </ul>
      </div>
      <div className="box font">
        <h1 className="heading">
          <div className="label">
            <img alt="" srcSet={library} />
            Your Library
          </div>
          <img className='add-symbol' alt="" srcSet={addSymbol} />
        </h1>
      </div>
    </div>
  )
}

export default Left
