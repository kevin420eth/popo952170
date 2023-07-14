import React from 'react'
import { useParams } from 'react-router-dom';
import './member.css'
import Header from '../../../Header/Header'
import _doctorData from '../doctorData'
import banner from '../../../../assets/banner.png'

import { AiOutlineCheck } from 'react-icons/ai'

const Member = () => {
    const { doctorName } = useParams();
    const doctorNamePool = ['johnnylin', 'johnnilin', 'linjohnny', 'linann', 'linpopo', 'linhathway', 'linpoki', 'linforest']
    const doctorIndex = doctorNamePool.indexOf(doctorName)
    const doctorData = _doctorData[doctorIndex]

    return (
        <div>
            <header>
                <Header />
            </header>
            <div className='banner__container'>
                <img src={banner} alt="" />
            </div>
            <div className='profile__container'>
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
                                        <li key={key}>{education}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className='major__treatment'>
                            <p className='major__treatment__title'>主治項目</p>
                            <ul className='major__treatment__list'>
                                {doctorData.majorTreatment.map((major, key) => {
                                    return (
                                        <li key={key}>{major}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </section>
                <p className='time__shift__title'>看診時間</p>
                <table class="timetable">
                    <tr>
                        <th>時間</th>
                        <th>禮拜一</th>
                        <th>禮拜二</th>
                        <th>禮拜三</th>
                        <th>禮拜四</th>
                        <th>禮拜五</th>
                        <th>禮拜六</th>
                    </tr>
                    <tr>
                        <td>早 9:00-12:00</td>
                        <td className='time__shift__slot'><AiOutlineCheck /></td>
                        <td className='time__shift__slot'></td>
                        <td className='time__shift__slot'></td>
                        <td className='time__shift__slot'><AiOutlineCheck /></td>
                        <td className='time__shift__slot'></td>
                        <td className='time__shift__slot'><AiOutlineCheck /></td>
                    </tr>
                    <tr>
                        <td>午 15:00-18:00</td>
                        <td className='time__shift__slot'><AiOutlineCheck /></td>
                        <td className='time__shift__slot'><AiOutlineCheck /></td>
                        <td className='time__shift__slot'></td>
                        <td className='time__shift__slot'></td>
                        <td className='time__shift__slot'><AiOutlineCheck /></td>
                        <td className='time__shift__slot'></td>
                    </tr>
                    <tr>
                        <td>晚 18:00-21:00</td>
                        <td className='time__shift__slot'><AiOutlineCheck /></td>
                        <td className='time__shift__slot'></td>
                        <td className='time__shift__slot'><AiOutlineCheck /></td>
                        <td className='time__shift__slot'></td>
                        <td className='time__shift__slot'></td>
                        <td className='time__shift__slot'><AiOutlineCheck /></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Member