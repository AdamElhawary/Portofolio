import React from 'react'
import '../../styles/contact.css'
// import faceBook from '../../assets/facebook.svg'
// import linkedin from '../../assets/linkedin.svg'
// import twitter from '../../assets/twitter.svg'
// import { BrowserRouter as Router } from "react-router-dom";
// import { Link } from "react-router-dom";
export default function Contact(props) {
    // const [dark, setTheme] = useState(true);

    return (
        <>
            <h1 className='headtitles'>Contact Me</h1>
            <div id='contact' className='sectionContainer'>


                <div className='subSectionContainer'>
                    <div className='contactForm'>
                        <form name="contact" method="POST" data-netlify="true">
                            <p>Quick and easy! </p>
                            <div className='formElem'>
                                <label>Name: </label>
                                <input type="text" name="name" />
                            </div>
                            <div className='formElem'>
                                <label>Email:</label>
                                <input type="email" name="email" />
                            </div>
                            <div className='formElem'>
                                <label>Role:</label>
                                <select name="role[]" >
                                    <option value="Client">Client</option>
                                    <option value="Developer">Developer</option>
                                </select>
                            </div>
                            <div className='formElem'>
                                <label>Message: </label>
                                <textarea name="message"></textarea>
                            </div>
                            <div >
                                <button type="submit">Send</button>
                            </div>
                        </form>
                    </div>

                    {/* <div>
                    <Router >
                        <p>Using Social media!</p>
                        <div className='socialMedia'>
                            <Link to='https://www.facebook.com/AdamElHawary.egy/' target='_blank'><img src={faceBook} alt='Facebook icon' /></Link>
                            <Link to='https://www.facebook.com/AdamElHawary.egy/' target='_blank'><img src={linkedin} alt='Linkedin icon' /></Link>
                            <Link to='https://www.facebook.com/AdamElHawary.egy/' target='_blank'><img src={twitter} alt='Twitter icon' /></Link>
                        </div>
                    </Router>
                    </div> */}

                </div>
            </div>
        </>

    )
}
