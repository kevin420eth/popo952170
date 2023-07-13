import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemDropdown from './DropDown/ServicesDropDown'
import AboutDropDown from './DropDown/AboutDropDown'
import './header.css'
import logo from '../../assets/logo.png'

import { AiOutlineClose, AiOutlineMenu, AiOutlineDown } from 'react-icons/ai'

const Header = () => {
    const [click, setClick] = useState(false)
    const [dropdownabout, setDropdownAbout] = useState(false)
    const [dropdownitem, setDropdownItem] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <nav className='navbar'>
            <div className='nav__logo__conntainer'>
                <Link to='/' className='nav__logo__link'>
                    <img src={logo} alt="logo" className='nav__logo__image' />
                </Link>
            </div>

            <ul className={click ? 'nav__menu active' : 'nav__menu'}>
                <li className='nav__item' onMouseEnter={() => { setDropdownAbout(true) }} onMouseLeave={() => { setDropdownAbout(false) }}>
                    <Link to='/' className='nav__link' >
                        關於澄臻 <i className='arrow__icon'>{<AiOutlineDown />}</i>
                    </Link>
                    {dropdownabout && <AboutDropDown />}
                </li>

                <li className='nav__item' onMouseEnter={() => { setDropdownItem(true) }} onMouseLeave={() => { setDropdownItem(false) }}>
                    <Link to='/services' className='nav__link' >
                        診療項目 <i className='arrow__icon'>{<AiOutlineDown />}</i>
                    </Link>
                    {dropdownitem && <ItemDropdown />}
                </li>
                <li className='nav__item'>
                    <Link to='/team' className='nav__link'>
                        醫療團隊
                    </Link>
                </li>
                <li className='nav__item'>
                    <Link to='/environment' className='nav__link'>
                        診所環境
                    </Link>
                </li>
                <li className='nav__item'>
                    <Link to='/contact-us' className='nav__link'>
                        案例回顧
                    </Link>
                </li>
                <li className='nav__item'>
                    <Link to='/sign-up' className='nav__link'>
                        立即預約
                    </Link>
                </li>
            </ul>

            <div className='menu__icon' onClick={handleClick}>
                <i className=''>
                    {click ? <AiOutlineMenu /> : <AiOutlineClose />}
                </i>
            </div>
        </nav>
    )
}

export default Header