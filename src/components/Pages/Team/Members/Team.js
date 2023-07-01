import React from 'react'
import './team.css'
import Navbar from '../../Header/Navbar/Navbar'

const Team = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <div className='profile__section'>
                <div className='profile__preview'>
                    <div className='profile__photo'></div>
                    <p className='doctor__title'>院長</p>
                    <p className='doctor__chinese__name'>林昌延醫師</p>
                    <p className='doctor__chinese__name'>Johnny Lin</p>
                </div>
                <div className='profile__text'>
                    <div className='education'>
                        <p className='education__title'>學經歷</p>
                        <ul className='education__list'>
                            <li>中山醫學大學牙醫學士</li>
                            <li>前中山醫學大學附設醫院醫師</li>
                            <li>美國塔弗茲大學 牙科訓練研習</li>
                            <li>紐約佛拉迪米爾大學 人工植牙認證技師</li>
                            <li>倫敦劍橋大學 牙齒工程學碩士</li>
                        </ul>
                    </div>
                    <div className='major__treatment'>
                        <p className='major__treatment__title'>主治項目</p>
                        <ul className='major__treatment__list'>
                            <li>牙周病</li>
                            <li>幼兒齲齒</li>
                            <li>活動假牙</li>
                            <li>固定假牙</li>
                            <li>根管治療</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team