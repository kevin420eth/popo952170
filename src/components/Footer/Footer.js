import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'
import line_qrcode from '../../assets/line_qrcode.jpg'

const Footer = () => {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()

    return (
        <div className='footer__section'>
            <div className='footer__content__container'>
                <div className='footer__logo__container'>
                    <img src={logo} alt="logo" className='footer__logo__image' />
                </div>
                <div className='footer__contact__information'>
                    <p className='footer__telephone'>電話: (04)-22355670</p>
                    <p className='footer__address'>地址: 台中市北屯區文心路四段151號</p>
                </div>
                <div className='footer__qrcode__container'>
                    <img src={line_qrcode} alt="logo" className='footer__qrcode__image' />
                </div>
            </div>
            <hr />
            <p className='footer__rights__reserved'>Copyright© {currentYear} 澄臻美學牙醫診所 版權所有</p>
        </div>
    )
}

export default Footer