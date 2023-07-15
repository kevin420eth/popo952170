import React from 'react'
import './team.css'

import Header from '../../Header/Header'
import doctorData from './doctorData'

import banner from '../../../assets/banner.png'

const Team = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <div className='banner__container'>
                <img src={banner} alt="" />
            </div>
            <section className='team__section section'>
                <p className='team__section__title'>醫療團隊</p>
                <div className='team__profile__section'>
                    {doctorData.map((item, key) => {
                        return (
                            <a href={`/team/${item.route}`} className='doctor__profile__preview' key={key}>
                                <div className='doctor__photo__preview'>
                                    <img src={item.profilePhoto} alt="" />
                                </div>
                                <p className='doctor__name'>{item.name} {item.title}</p>
                                <p className='major__skill'>{item.majorTreatment[0]}</p>
                            </a>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default Team