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
        <section className='contact__section'>
          <p>聯繫我們</p>
          <div className='contact__container'>
            <div className='contact__ways'>
                <a className='contact__way__button'>Line</a>
                <a className='contact__way__button'>Telephone</a>
            </div>
            <div className='contact__form__container'>
                <form className='contact__form' action="">
                    <label for="fname">姓</label>
                    <input type="text" id="fname" name="fname"/>
                    <label for="lname">名</label>
                    <input type="text" id="lname" name="lname"/>
                    <label for="email">電話</label>
                    <input type="email" id="email" name="email"/>
                    <label for="email">E-mail</label>
                    <input type="email" id="email" name="email"/>
                    <label for="email">預約時段</label>
                    <input type="email" id="email" name="email"/>
                    <label for="email">性別</label>
                    <input type="email" id="email" name="email"/>
                    <label for="email">治療項目</label>
                    <input type="email" id="email" name="email"/>
                    <input type="submit" value="Submit"/>
                </form> 
            </div>
          </div>
        </section>
      </div>
        )
      }
  
  export default Contact