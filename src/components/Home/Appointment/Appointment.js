import React from 'react'
import './appointment.css'
// import image from '../../../assets/appointment_image.png'

const Appointment = () => {
    return (
        <section className='appointment__section'>
            <div className='image__container'>
                {/* <img src={image} alt="appointment" /> */}
            </div>
            <h1 className='appointment__title'>動人笑容，總源自於雙眸綻放的神韻</h1>
            <p className='appointment__subtitle'>Every touching smile, start from the eyes.</p>
            <p className='appointment__description'>
                笑容設計就像一門藝術創作，專注於「牙科美學」的我們堅信著。<br />醫者們近乎苛求的美學設計工藝，只為了讓您的笑容更迷人、更自然
            </p>
            <a href="/" className='button appointment__button'>立即預約諮詢</a>
        </section>
    )
}

export default Appointment