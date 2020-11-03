import React from 'react'
import Topbar from './Topbar';
import logo from '../../assets/Lion.svg'
import '../../styles/header.css';

export default function Header(props) {
    return (
        <div className='headerContainer'>
            <div>
                <Topbar clicked={() => props.clicked()} />
            </div>
            <div className='logoContainer'>
                <img className='logo' src={logo} alt='Logo' />
            </div>
        </div>
    )
}
