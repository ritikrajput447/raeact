import React from 'react'
import './Projects.css'
import img1 from '../../assets/img/logo.jpg'
import img2 from '../../assets/img/NetflixSymbol.png'
import img3 from '../../assets/img/Picsartt.jpg'

const Projects = () => {
    return (
        <>
            <div className="container project" id='Project'>
                <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>top recent projects</h2>
                <hr></hr>
                <p className='pb-3 text-center'>
                    Here is the project list Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt adipisci, recusandae porro vel ipsum fuga nam nobis minima, ea qui velit inventore expedita libero ipsa veritatis totam ab fugiat nihil?
                </p>
                <div className="row" id="ads">
                    <div className="col-md-4">
                        <div className="card round">
                            <div className="card-image">
                                <span className='card-notify-badge'>Fullstack</span>
                                <img src={img1} alt="project1" />
                            </div>
                            <div className='card-image-overly m-auto mt-3'>
                                <span className="card-details-badge">HTML</span>
                                <span className="card-details-badge">CSS</span>
                                <span className="card-details-badge">Javascript</span>
                                <span className="card-details-badge">React.js</span>

                            </div>
                            <div className="card-Body text-center">
                                <div className="ad-title m-auto">
                                    <h5 className='text-uppercase'>Portfolio</h5>
                                </div>
                                <a className='ad-btn' href="#">view</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card round">
                            <div className="card-image">
                                <span className='card-notify-badge'>Practice</span>
                                <img src={img2} alt="project2" />
                            </div>
                            <div className='card-image-overly m-auto mt-3'>
                                <span className="card-details-badge">HTML</span>
                                <span className="card-details-badge">CSS</span>
                                <span className="card-details-badge">Javascript</span>
                                {/* <span className="card-details-badge">Mongodb</span> */}

                            </div>
                            <div className="card-Body text-center">
                                <div className="ad-title m-auto">
                                    <h5 className='text-uppercase'>NETFLIX CLONE</h5>
                                </div>
                                <a className='ad-btn' href="#">view</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card round">
                            <div className="card-image">
                                <span className='card-notify-badge'>Practice</span>
                                <img src={img3} alt="project3" />
                            </div>
                            <div className='card-image-overly m-auto mt-3'>
                                <span className="card-details-badge">HTML</span>
                                <span className="card-details-badge">CSS</span>
                                <span className="card-details-badge">Javascript</span>
                                <span className="card-details-badge">React.js</span>

                            </div>
                            <div className="card-Body text-center">
                                <div className="ad-title m-auto">
                                    <h5 className='text-uppercase'>Spotify</h5>
                                </div>
                                <a className='ad-btn' href="#">view</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects