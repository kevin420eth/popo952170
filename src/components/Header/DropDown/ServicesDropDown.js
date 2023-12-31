import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuItems from '../MenuItems/ServicesMenu'
import './dropdown.css'

const ServicesAboutDropDown = () => {
  const[click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <div>
      <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.path} onClick={() => { setClick(false) }}>{item.title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ServicesAboutDropDown