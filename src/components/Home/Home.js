import React from 'react'
import './home.css'

import Navbar from '../Header/Navbar/Navbar'
import Main from './Main/Main'
import Appointment from './Appointment/Appointment'
import Equipment from './Equipment/Equipment'

const Home = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <Main />
                <Appointment />
                <Equipment />
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default Home