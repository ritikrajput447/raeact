import React from 'react'
import './Contact.css'
import { FaLinkedin, FaGithub, FaSquareInstagram } from "react-icons/fa6";
const Contact = () => {
    return (
        <>
            <div className="container contact" id='Contact'>
                <div className="card card0 border-0">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <div className="card1">
                                <div className="row border-line">
                                    <img src="data:image/jpeg;base64,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" alt="contact" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="card2 d-flex card border-0 px-4 py-5">
                                <div className="row">
                                    <div className="row">
                                        <h6>contact <a href=''><FaLinkedin color='blue' className='ms-2' size={30} /></a>
                                            <FaGithub color='black' className='ms-2' size={30} />
                                            <FaSquareInstagram color='red' className='ms-2' size={30} />
                                        </h6>
                                    </div>

                                    <div className="row px-3 mb-4">
                                        <div className="line" />
                                        <small className="or text-center">OR</small>
                                        <div className="line" />
                                    </div>
                                    <div className="row px-3">
                                        <input type="text" name='Name' placeholder='Name ' className='mb-3' />
                                    </div>
                                    <div className="row px-3">
                                        <input type="email" name='email' placeholder='email' className='mb-3' />
                                    </div>
                                    <div className="row px-3">
                                        <textarea type="text" name='msg' placeholder='Write Message' className='mb-3' />
                                    </div>
                                    <div className="row px-3">
                                        <button type="button" className='button'>Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Contact