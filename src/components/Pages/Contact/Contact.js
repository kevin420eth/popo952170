import React from 'react'
import './contact.css'
import Header from '../../Header/Header'
import banner from '../../../assets/banner.png'

const Contact = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className='banner__container'>
        <img src={banner} alt="" />
      </div>
      <section className='contact__section section'>
        <p>聯繫我們</p>
        <div className='contact__container'>
          <div className='contact__ways'>
            <a href='https:google.com' className='contact__way__button'>Line</a>
            <a href='https:google.com' className='contact__way__button'>Telephone</a>
            <a href='https:google.com' className='contact__way__button'>Email</a>
          </div>


          <div className='contact__form__container'>
            <form className='contact__form' action="">
              <label for="name">姓名</label>
              <input type="text" id="name" name="name" />

              <label for="phone">電話</label>
              <input type="tel" id="phone" name="phone" />

              <label for="email">E-mail</label>
              <input type="email" id="email" name="email" />

              <label for="appointment">預約時段</label>
              <input type="datetime-local" id="appointment" name="appointment" />

              <label for="gender">性別</label>
              <div>
                <label for="gender">男</label>
                <input type="radio" id="male" name="male" />

                <label for="gender">女</label>
                <input type="radio" id="female" name="female" />
              </div>


              <label for="email">治療項目</label>
              <input type="email" id="email" name="email" />

              <input type="submit" value="Submit" />
            </form>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Contact