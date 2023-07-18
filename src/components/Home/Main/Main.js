import React from 'react'
import './main.css'
import video from '../../../assets/video.mp4'

const Main = () => {
  return (
    <section className='home__section section'>
      <div className='video__container'>
        <video src={video} width='500' height='300' autoplay='true' loop muted></video>
      </div>

    </section>
  )
}

export default Main