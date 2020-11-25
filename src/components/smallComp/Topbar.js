import React from 'react'
import '../../styles/topbar.css';
import logo from '../../assets/logo.svg';
import { Link } from 'react-scroll';

export default function Topbar(props) {
    return (

        <div className="topbarContainer">
            <div  className='sidebarToggle'>
                <img  className='logo' src={logo} alt='toggle' />
            </div>
            <ul className='navFlex'>
                {/* <li><Link activeClass="active" spy={true} smooth={true} to='about'>Bio</Link></li> */}
                <li><Link activeClass="active" spy={true} smooth={true} to='work'>My Wrok</Link></li>
                <li><Link activeClass="active" spy={true} smooth={true} to='testimonials'>Testimonials</Link></li>
                <li><Link activeClass="active" spy={true} smooth={true} to='contact'>Contact Me</Link></li>
            </ul>
        </div>
    )
}
