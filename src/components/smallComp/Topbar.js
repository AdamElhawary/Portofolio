import React from 'react'
import '../../styles/topbar.css';
import toggle from '../../assets/toggle.svg';
import {Link} from 'react-router';
export default function Topbar(props) {
    return (

        <div className="topbarContainer">
            <div onClick={() => props.clicked()} className='sidebarToggle'>
                <img className='toggle' src={toggle} alt='toggle' />
            </div>
            <button><Link to={`#`} activeClassName="active">Recent Work</Link></button>
        </div>
    )
}
