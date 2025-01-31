import React, { Fragment } from 'react'
import './Rrkstack.css'
import { Rrkstacklist } from '../../util/Rrkstacklist'

const Rrkstack = () => {
    return (
        <>
            <div className='techno' id='Tech'>
                <div className='container rrkstack'>
                    <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Technology</h2>
                    <hr></hr>
                    <p className='pb-3 text-center'>
                        ✌ let me show my....
                    </p>
                </div>
                <div className='row'>
                    {Rrkstacklist.map(tech => (
                        <div key={tech._id} className="col-md-3">
                            <div className="card m-2">
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="media d-flex justify-content-center">
                                            <div className='align-self-center-'>
                                                <tech.icon className='tech-icon'></tech.icon>
                                            </div>
                                            <div className="media-body">
                                                <h5>{tech.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Rrkstack