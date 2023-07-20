import React from 'react'
import './home.css'

import Header from '../Header/Header'
import Landing from './Landing/Landing'
import About from './About/About'
import Appointment from './Appointment/Appointment'
import Enviroment from './Enviroment/Enviroment'
import Services from './Services/Services'
import Footer from '../Footer/Footer'

const Home = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <Landing />
                <About />
                <Appointment />
                <Services />
                <Enviroment />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Home