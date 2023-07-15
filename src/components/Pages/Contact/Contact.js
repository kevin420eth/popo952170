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
        <h1 className='section__title'>立即預約</h1>
        <div className='contact__container'>
          <div className='contact__information__container'>
            <p className='contact__information__title'>聯絡資訊</p>
            <h6>電話</h6>
            <p className='contact__informaion'>(04)-2235-5670</p>
            <h6>官方Line帳號</h6>
            <p className='contact__informaion'>@johnnylin666</p>
            <h6>地址</h6>
            <a className='contact__informaion' href='https://www.google.com/maps/place/No.+151,+Section+4,+Wenxin+Rd,+Beitun+District,+Taichung+City,+406/@24.1737704,120.6734719,17z/data=!3m1!4b1!4m6!3m5!1s0x346917d03fcc05d1:0xe3a69a44e353d314!8m2!3d24.1737655!4d120.6760468!16s%2Fg%2F11csgrbr2s?entry=ttu' target='blank'>台中市北屯區文心路四段151號</a>
            <h6>門診時間</h6>
            <div className='time__list__container'>
              <dl className='time__list'>
                <dt>週一至週五</dt>
                <dd>早 9:00~12:00</dd>
                <dd>午 13:00~18:00</dd>
                <dd>晚 18:00~21:00</dd>
              </dl>
              <dl className='time__list'>
                <dt>週六</dt>
                <dd>早 9:00~12:00</dd>
                <dd>午 13:00~18:00</dd>
              </dl>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.9420369145796!2d120.6760468!3d24.1737655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346917d03fcc05d1%3A0xe3a69a44e353d314!2sNo.%20151%2C%20Section%204%2C%20Wenxin%20Rd%2C%20Beitun%20District%2C%20Taichung%20City%2C%20406!5e0!3m2!1sen!2stw!4v1689439553747!5m2!1sen!2stw"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div className='contact__form__container'>
            <form className='contact__form' action="">
              <label for="name">姓名<span className='required__symbol'>*</span></label>
              <input type="text" id="name" name="name" placeholder='林小明' required />

              <label for="phone">電話<span className='required__symbol'>*</span></label>
              <input type="tel" id="phone" name="phone" placeholder='0988123456' required />

              <label for="email">E-mail</label>
              <input type="email" id="email" name="email" placeholder='hnny@gmail.com' />

              <label for="appointment">預約時段<span className='required__symbol'>*</span></label>
              <input type="datetime-local" id="appointment" name="appointment" required />

              <label for="gender">性別<span className='required__symbol'>*</span></label>
              <div className='gender__radio__container'>
                <input type="radio" id="male" name="male" />
                <label for="gender">男</label>

                <input type="radio" id="female" name="female" />
                <label for="gender">女</label>
              </div>

              <label for="service">治療項目</label>
              <input type="text" id="service" name="service" placeholder="植牙" />

              <label for="suggestion">想跟我們說...</label>
              <textarea className='' id="suggestion" name='suggestion' col='2000' maxLength='1000' placeholder='你好，︀我是林小明，︀我希望...'></textarea>
              
              <label className='submit__button' for="submit">提交表單</label>
              <input className='submit__input' type="submit" value="Submit" name='submit' />
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact