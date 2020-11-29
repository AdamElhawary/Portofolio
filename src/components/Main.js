import React from 'react'
import Contact from './smallComp/Contact';
import Footer from './smallComp/Footer';
import Header from './smallComp/Header';
import PreviousWork from './smallComp/PreviousWork';
import AboutMe from './smallComp/AboutMe';

import './main.css'

export default function Main() {
    
    return (
        <>
           
                <Header/>
                <AboutMe />
                <PreviousWork />
                <Contact />
                <Footer />
            
        </>
    )
}
