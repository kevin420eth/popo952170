import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer__section'>
            <div className='footer__content__container'>
                <div className='footer__logo__container'>
                    Logo
                </div>
                <div className='footer__contact__information'>
                    <p className='footer__telephone'>(04)-22355670</p>
                    <p className='footer__address'>台中市北屯區文心路四段151號</p>
                </div>
            </div>
            <p className='footer__rights__reserved'>All rights reserved</p>
        </div>
    )
}

export default Footer