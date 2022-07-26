import React from 'react'
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

import { AnimatePresence } from 'framer-motion'

//style
import './scss/main.scss';

///routes
import Home from './routes/home';
import Works from './routes/works';
import Contact from './routes/contact';

const App = () => {

    const location = useLocation()

    return (
        <>
        <Preloader/>
        <Header />
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.key}>
                <Route path="/" element={<Home/>}/>
                <Route path="/works" element={<Works/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </AnimatePresence>
        <Footer />
        </>
    )
}

export default App
