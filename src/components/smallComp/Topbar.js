import React from 'react'
import '../../styles/topbar.css';
import logo from '../../assets/Lion.svg'
import toggle from '../../assets/toggle.svg'

export default function Topbar(props) {
    console.log(props);
    return (
        <div className="topbarContainer">
            <div className='logoContainer'>
                <img className='logo'  src={logo} alt='Logo' />
            </div>
            <div onClick={()=> props.clicked()} className='sidebarToggle'>
                <img  className='toggle'  src={toggle} alt='toggle' />
            </div>
        </div>
    )
}
