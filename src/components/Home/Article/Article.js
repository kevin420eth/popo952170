import React from 'react'
import './article.css'

import ArticleContent from './ArticleContent'

const Article = () => {
    return (
        <section className='article__section'>
            <h1 className='article__title'>陶瓷貼片推薦文章</h1>
            <p className='article__subtitle'>台中陶瓷貼片專門所 - 澄臻美學為大家精選的牙齒美白推薦知識都在這裡哦</p>
            <div className='article__container'>
                {ArticleContent.map((item, index) => {
                    return (
                        <a href='/' className='article__content__container' key={index}>
                            <div className='article__thumbnail__container'>
                                <img src={item.thumbnail} alt="thumbnail_1" className='article__thumbnail' />
                            </div>
                            <div className='article__content__title'>
                                {item.title}
                            </div>
                            <p className='article__content__text'>
                                {(item.content.length > 100) ? item.content.slice(0, 99) + '...' : item.title}
                                <br />
                                <a href="/" className='read__more__button'>繼續閱讀</a>
                            </p>
                        </a>
                    )
                })}
            </div>
        </section>
    )
}

export default Article