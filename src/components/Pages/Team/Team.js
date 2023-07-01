import React from 'react'
import './team.css'
import Navbar from '../../Header/Navbar/Navbar'
import johnnylin from '../../../assets/Johnny_Lin.jpg'
import doctor_1 from '../../../assets/doctor_1.png'
import doctor_2 from '../../../assets/doctor_2.png'
import doctor_3 from '../../../assets/doctor_3.png'
import doctor_4 from '../../../assets/doctor_4.png'
import doctor_5 from '../../../assets/doctor_5.png'
import doctor_6 from '../../../assets/doctor_6.png'
import doctor_7 from '../../../assets/doctor_7.png'

const Team = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <section className='team__section'>
                <p className='team__section__title'>醫療團隊</p>
                <div className='team__profile__section'>
                    <a href='https://google.com' className='doctor__profile__preview'>
                        <div className='doctor__photo__preview'>
                            <img src={johnnylin} alt="" />
                        </div>
                        <p>林昌延 院長</p>
                    </a>
                    <a href='https://google.com' className='doctor__profile__preview'>
                        <div className='doctor__photo__preview'>
                            <img src={doctor_1} alt="" />
                        </div>
                        <p>江逆鱗 醫師</p>
                    </a>
                    <a href='https://google.com' className='doctor__profile__preview'>
                        <div className='doctor__photo__preview'>
                            <img src={doctor_2} alt="" />
                        </div>
                        <p>林強尼 醫師</p>
                    </a>
                    <a href='https://google.com' className='doctor__profile__preview'>
                        <div className='doctor__photo__preview'>
                            <img src={doctor_3} alt="" />
                        </div>
                        <p>林安海 醫師</p>
                    </a>
                    <a href='https://google.com' className='doctor__profile__preview'>
                        <div className='doctor__photo__preview'>
                            <img src={doctor_4} alt="" />
                        </div>
                        <p>林波波 醫師</p>
                    </a>
                    <a href='https://google.com' className='doctor__profile__preview'>
                        <div className='doctor__photo__preview'>
                            <img src={doctor_5} alt="" />
                        </div>
                        <p>林瑟薇 醫師</p>
                    </a>
                    <div className='doctor__profile__preview'>
                        <div className='doctor__photo__preview'>
                            <img src={doctor_6} alt="" />
                        </div>
                        <p>林波奇 醫師</p>
                    </div>
                    <a href='https://google.com' className='doctor__profile__preview'>
                        <div className='doctor__photo__preview'>
                            <img src={doctor_7} alt="" />
                        </div>
                        <p>林森林 醫師</p>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Team