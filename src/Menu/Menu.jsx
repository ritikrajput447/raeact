import React from 'react'
import './Menu.css'
import { FcHome, FcAbout, FcBusinessman, FcPositiveDynamic, FcReading, FcVideoProjector, FcVoicePresentation, FcBusinessContact } from "react-icons/fc";
import imgMain from '../assets/img/Picsart.jpg'

import { Link } from 'react-scroll';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


const Menu = ({ Toggle }) => {

    return (
        <>
            {Toggle ? (
                <>
                    <Zoom>

                        <div className="navbar-profile-pic">
                            <img src={imgMain} alt="profile-pic" />
                        </div>
                    </Zoom>
                    <Fade left>

                        <div className="nav-items">
                            <div className="nav-item">
                                <div className="nav-link">
                                    <Link to='Home' spy={true} offset={-100} duration={100}>
                                        <FcHome />Home

                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to='About' spy={true} offset={-100} duration={100}>
                                        <FcAbout />About
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to='Education' spy={true} offset={-100} duration={100}>
                                        <FcReading />Education
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to='Tech' spy={true} offset={-100} duration={100}>
                                        <FcPositiveDynamic />Skills
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to='Project' spy={true} offset={-100} duration={100}>
                                        <FcVideoProjector />Project
                                    </Link>
                                </div>

                                {/* <div className="nav-link">
                                    <Link to='experience' spy={true} offset={-100} duration={100}>
                                        <FcBusinessman />Experience
                                    </Link>
                                </div> */}
                                <div className="nav-link">
                                    <Link to='Contact' spy={true} offset={-100} duration={100}>
                                        <FcBusinessContact />Contact
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </>
            ) : (
                <>
                    <div className="nav-items-icon-only">
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to='Home' spy={true} offset={-100} duration={100}>
                                    <FcHome title='Home' />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to='About' spy={true} offset={-100} duration={100}>
                                    <FcAbout title='About' />
                                </Link>

                            </div>
                            <div className="nav-link">
                                <Link to='Education' spy={true} offset={-100} duration={100}>
                                    <FcReading title='Education' />
                                </Link>

                            </div>
                            <div className="nav-link">
                                <Link to='Tech' spy={true} offset={-100} duration={100}>
                                    <FcPositiveDynamic title='Skills' />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to='Project' spy={true} offset={-100} duration={100}>
                                    <FcVideoProjector title='Project' />
                                </Link>

                            </div>
                            {/* <div className="nav-link">
                                <FcVoicePresentation /></div> */}
                            {/* <div className="nav-link">
                                <Link to='experience' spy={true} offset={-100} duration={100}>
                                    <FcBusinessman title='Experience' />
                                </Link>

                            </div> */}
                            <div className="nav-link">
                                <Link to='Contact' spy={true} offset={-100} duration={100}>
                                    <FcBusinessContact title='Contact' />
                                </Link>
                            </div>
                        </div>

                    </div>
                </>
            )
            }

        </>
    )
}

export default Menu
