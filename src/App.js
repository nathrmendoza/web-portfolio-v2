import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

//style
import './scss/main.scss';

///routes
import Home from './routes/home';
import Works from './routes/works';
import Contact from './routes/contact';

const App = () => {
    return (
        <>
        <Preloader/>
        <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/works" element={<Works/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            <Footer />
        </BrowserRouter>
        </>
    )
}

export default App
