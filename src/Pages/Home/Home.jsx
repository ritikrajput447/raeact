import React from 'react'
import './home.css'
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/RitikRajput.pdf'

const Home = () => {
    return (
        <>
            <div className="container-fluid home-container" id='Home'>
                <div className="container home-content">
                    <h2>RITIK RAJPUT✔ <h4>This is my official portfolio to show all</h4></h2>

                    <h1>
                        <Typewriter
                            options={{
                                // strings: ['HTML, CSS, JavaScript, Sql, React', 'Details', 'work experience', 'in wed development.'],
                                strings: ['Details', 'work experience', 'in wed development.'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <div className="home-buttons">
                        <a className='btn btn-hire' href='https://api.whatsapp.com/send?phone=7617716707' rel='noreferrer' target='_blank'>Hire Me</a>
                        {/* <button className='btn btn-hire'>Hire Me</button> */}
                        <a className='btn btn-cv' href={Resume} download="Ritik_Rajput.pdf">My Resume</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home