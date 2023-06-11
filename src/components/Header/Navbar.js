import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import Dropdown from './Dropdown'
import './navbar.css'

import { AiOutlineClose, AiOutlineMenu, AiOutlineDown } from 'react-icons/ai'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    }

    return (
        <div>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    Logo
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className=''>
                        {click ? <AiOutlineMenu /> : <AiOutlineClose />}
                    </i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                            Services <i>{<AiOutlineDown />}</i>
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                    <Button />
                </ul>
            </nav>
        </div>
    )
}

export default Navbar