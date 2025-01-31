import React from 'react'
import Home from '../../Pages/Home/Home'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md"
import './Layout.css'
import { useState } from 'react'
import Menu from '../../Menu/Menu';

const Layout = () => {
    const [Toggle, setToggle] = useState(true)

    // change toggle
    const handleToggle = () => {
        setToggle(!Toggle)
    }
    return (
        <>
            <div className='sidebar-section'>
                <div className={Toggle ? 'sidebar-toggle' : 'sidebar'}>
                    <div className='side-toggle-icon'>
                        <p onClick={handleToggle}>
                            {
                                Toggle ? <MdOutlineKeyboardDoubleArrowLeft size={30} /> : <MdOutlineKeyboardDoubleArrowRight size={30} />

                            }
                        </p>
                    </div>
                    <Menu Toggle={Toggle}></Menu>
                </div>
                <div className='container'>
                    <Home></Home>

                </div>
            </div>
        </>
    )
}

export default Layout