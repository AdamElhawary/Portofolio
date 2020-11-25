import React from 'react'
import Topbar from './Topbar';

import '../../styles/header.css';

export default function Header(props) {
    return (
        <div className='overlay'>

            <div className='headerContainer'>
                <div>
                    <Topbar />
                </div>
                <div className='headerParagraph' >
                    {/* <p>Welcome!</p> */}
                    <p> I'm Adam, </p>
                    <h1> A Web Developer. </h1>

                </div>
            </div>
        </div>
    )
}
