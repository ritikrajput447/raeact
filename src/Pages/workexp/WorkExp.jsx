import React from 'react'
import './WorkExp.css'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from "react-icons/md";



const WorkExp = () => {
    return (
        <>
            <div className="experience" id='experience'>
                <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Experience</h2>
                <hr></hr>
                <VerticalTimeline lineColor='#131301'>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="june 2023 - present"
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">Fullstack</h3>
                        <h5 className="vertical-timeline-element-subtitle">Jspider</h5>
                        {/* <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p> */}
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
        </>
    )
}

export default WorkExp