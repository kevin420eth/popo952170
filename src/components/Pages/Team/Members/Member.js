import React from 'react'
import { useParams } from 'react-router-dom';
import './member.css'
import Navbar from '../../../Header/Navbar/Navbar'
import _doctorData from '../doctorData'
import banner from '../../../../assets/banner.png'

const Member = () => {
    const { doctorName } = useParams();
    const doctorNamePool = ['johnnylin', 'johnnilin', 'linjohnny', 'linann', 'linpopo', 'linhathway', 'linpoki', 'linforest']
    const doctorIndex = doctorNamePool.indexOf(doctorName)
    const doctorData = _doctorData[doctorIndex]
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <div className='banner__container'>
                <img src={banner} alt="" />
            </div>
            <div>
                <p className='doctor__name'>{doctorData.name} {doctorData.title}</p>
                <section className='profile__section'>
                    <div className='profile__preview'>
                        <div className='profile__photo'>
                            <img src={doctorData.profilePhoto} alt={doctorData.name} />
                        </div>
                    </div>
                    <div className='profile__text'>
                        <div className='education'>
                            <p className='education__title'>學經歷</p>
                            <ul className='education__list'>
                                {doctorData.education.map((education, key) => {
                                    return (
                                        <li>{education}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className='major__treatment'>
                            <p className='major__treatment__title'>主治項目</p>
                            <ul className='major__treatment__list'>
                                {doctorData.majorTreatment.map((major, key) => {
                                    return (
                                        <li>{major}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Member