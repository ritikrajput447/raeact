import React from 'react'
import './About.css'
import imgMain from '../../assets/img/Picsart.jpg'


const About = () => {
    return (
        <>
            <div className='about' id='About'>
                <div className="row">
                    <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                        <img src={imgMain} alt="profile-pic" />

                    </div>
                    <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                        <h1>About me</h1>
                        <p>
                            A passionate Web developer with a deep-rooted interest in the ever-evolving landscape of web
                            development and technology. My journey in the field of computer science has been marked by a strong
                            enthusiasm for creating innovative and user-centric digital experiences.
                        </p>
                    </div>
                    <div className="col-md-6"></div>
                    <div className="col-md-6"></div>
                    <div className="col-md-6"></div>
                    <div className="col-md-6"></div>
                </div>
            </div>

        </>
    )
}

export default About