import React from 'react'
import './team.css'
import Navbar from '../../Header/Navbar/Navbar'

import banner from '../../../assets/banner.png'

import doctor_0 from '../../../assets/doctor_0.png'
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
            <div className='banner__container'>
                <img src={banner} alt="" />
            </div>
            <section className='team__section'>
                <p className='team__section__title'>醫療團隊</p>
                <div className='team__profile__section'>
                    <a href='/team/johnnylin' className='doctor__profile__preview'>
                        <div className='doctor__photo__preview'>
                            <img src={doctor_0} alt="" />
                        </div>
                        <p className='doctor__name'>林昌延 院長</p>
                        <p className='major__skill'>牙周植牙專科</p>
                    </a>
                    <a href='/team/johnnylin' className='doctor__profile__preview'>
                        <div className='doctor__photo__preview'>
                            <img src={doctor_1} alt="" />
                        </div>
                        <p className='doctor__name'>江逆鱗 副院長</p>
                        <p className='major__skill'>美學植牙專科</p>
                    </a>
                    <a href='/team/linjohnny' className='doctor__profile__preview'>
                        <div className='doctor__photo__preview'>
                            <img src={doctor_2} alt="" />
                        </div>
                        <p className='doctor__name'>林強尼 醫師</p>
                        <p className='major__skill'>矯正專科</p>
                    </a>
                    <a href='/team/linanhai' className='doctor__profile__preview'>
                        <div className='doctor__photo__preview'>
                            <img src={doctor_3} alt="" />
                        </div>
                        <p className='doctor__name'>林安海 醫師</p>
                        <p className='major__skill'>兒童專科</p>
                    </a>
                    <a href='/team/linpopo' className='doctor__profile__preview'>
                        <div className='doctor__photo__preview'>
                            <img src={doctor_4} alt="" />
                        </div>
                        <p className='doctor__name'>林波波 醫師</p>
                        <p className='major__skill'>口外專科</p>
                    </a>
                    <a href='/team/linhathway' className='doctor__profile__preview'>
                        <div className='doctor__photo__preview'>
                            <img src={doctor_5} alt="" />
                        </div>
                        <p className='doctor__name'>林瑟薇 醫師</p>
                        <p className='major__skill'>根管治療專科</p>
                    </a>
                    <a href='/team/linpoki' className='doctor__profile__preview'>
                        <div className='doctor__photo__preview'>
                            <img src={doctor_6} alt="" />
                        </div>
                        <p className='doctor__name'>林波奇 醫師</p>
                        <p className='major__skill'>家庭牙醫專科</p>
                    </a>
                    <a href='linforest' className='doctor__profile__preview'>
                        <div className='doctor__photo__preview'>
                            <img src={doctor_7} alt="" />
                        </div>
                        <p className='doctor__name'>林森林 醫師</p>
                        <p className='major__skill'>矯正專科</p>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Team