
import React from 'react';
import { MdMenu } from "react-icons/md";
import './MobileNav.css'

import { FcHome, FcAbout, FcBusinessman, FcPositiveDynamic, FcReading, FcVideoProjector, FcVoicePresentation, FcBusinessContact } from "react-icons/fc";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from 'react-scroll';
import { useState } from "react";




const MobileNav = () => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }


    const handleMenuClick = () => {
        setOpen(false)
    }


    return (
        <>
            <div className="mobile-nav">
                <div className="mobile-nav-header">
                    {open ? (<AiOutlineMenuUnfold size={30} className='mobile-nav-icon' onClick={handleOpen}></AiOutlineMenuUnfold>) : (<MdMenu size={30} className='mobile-nav-icon' onClick={handleOpen}></MdMenu>)}

                    <span className='mobile-nav-title'>my portfolio</span>
                </div>
                {open && (
                    <div className='mobile-nav-menu'>
                        <div className="nav-items">
                            <div className="nav-item">
                                <div className="nav-link">
                                    <Link to='Home' spy={true} smooth={true} offset={-100} duration={100} onclick={handleMenuClick}>
                                        <FcHome />Home

                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to='About' spy={true} offset={-100} duration={100} onclick={handleMenuClick}>
                                        <FcAbout />About
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to='Education' spy={true} offset={-100} duration={100} onclick={handleMenuClick}>
                                        <FcReading />Education
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to='Tech' spy={true} offset={-100} duration={100} onclick={handleMenuClick}>
                                        <FcPositiveDynamic />RR
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to='Project' spy={true} offset={-100} duration={100} onclick={handleMenuClick}>
                                        <FcVideoProjector />Project
                                    </Link>
                                </div>
                                {/* <div className="nav-link">
                                <FcVoicePresentation />Testimonial</div> */}
                                {/* <div className="nav-link">
                                    <Link to='experience' spy={true} offset={-100} duration={100} onclick={handleMenuClick}>
                                        <FcBusinessman />Experience
                                    </Link>
                                </div> */}
                                <div className="nav-link">
                                    <Link to='Contact' spy={true} offset={-100} duration={100} onclick={handleMenuClick}>
                                        <FcBusinessContact />Contact
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                )}

            </div>
        </>
    )
}

export default MobileNav