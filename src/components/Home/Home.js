import React from 'react'
import './home.css'

import Header from '../Header/Header'
import Main from './Main/Main'
import Appointment from './Appointment/Appointment'
import Equipment from './Equipment/Equipment'
import Article from './Article/Article'
import Services from './Services/Services'
import Footer from '../Footer/Footer'

const Home = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <Main />
                <Appointment />
                <Equipment />
                <Article />
                <Services />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Home