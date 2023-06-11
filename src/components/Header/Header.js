import React from 'react'
import {useState} from 'react'
import './header.css'
import logo from '../../assets/logo.png'

const Header = () => {
  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)
    return (
        <nav className='navbar__container'>
            <a href='/' className='logo__container'><img src={logo} alt="澄臻美學" className='logo__image'/></a>
            <ul className='navbar__list'>
                <li className='navbar__item'>
                    <a href="https://google.com" target='_blank' rel='noreferrer'>關於澄臻</a>
                </li>
                <li className='navbar__item'>
                    <a href="https://google.com" target='_blank' rel='noreferrer'>牙醫團隊</a>
                </li>
                <li className='navbar__item'>
                    <a href="https://google.com" target='_blank' rel='noreferrer'>診療項目</a>
                </li>
                <li className='navbar__item'>
                    <a href="https://google.com" target='_blank' rel='noreferrer'>立即預約</a>
                </li>
            </ul>
        </nav>
    )
}

export default Header