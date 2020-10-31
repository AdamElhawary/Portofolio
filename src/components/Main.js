import React, {useState} from 'react'
import Contact from './smallComp/Contact';
import Header from './smallComp/Header';
import Topbar from './smallComp/Topbar';
import Footer from './smallComp/Footer';
import PreviousWork from './smallComp/PreviousWork';
import AboutMe from './smallComp/AboutMe'
import Sidebar from './smallComp/Sidebar'
import './main.css'
export default function Main() {
    const [open, setOpen] = useState(true)
    return (
        <div className='mainContainer'>
            <div className={open? 'open' : 'close'}>
                <Topbar clicked={()=> setOpen(!open)} />
                <Header />
                <AboutMe />
                <PreviousWork />
                <Contact />
                <Footer />
            </div>
            <div className={open? 'openSidebar' : 'closeSidebar'}>
                <div className='sidebarOverlay'>
                    <Sidebar/>
                </div>
            </div>

        </div>
    )
}
