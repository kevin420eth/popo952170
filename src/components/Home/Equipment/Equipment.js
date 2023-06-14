import React from 'react'
import './equipment.css'

const Equipment = () => {
    return (
        <section className='equipment__section'>
            <div className='content__container'>
                <h1 className='equipment__title'>陶瓷貼片專門所</h1>
                <p className='equipment__subtitle'>從齒，愛上鏡中的你</p>
                <p className='equipment__description'>
                    渴望一天內，就能在鏡子或鏡頭前展現自信笑容嗎? <br /><br />朗日牙藝不只要滿足您的心願，更希望提供您五星級的療程體驗。<br />看看在精心打造的VIP級私人診間中如何展開一趟高質感的輕瓷美白貼片旅程吧!<br /><br />離開朗日牙藝前，我們相信鏡子前的您會綻放滿意、自信、又迷人的笑容!
                </p>
            </div>
            <a href="/" className='button equipment__button'>查看五星級設備</a>
        </section>
    )
}

export default Equipment