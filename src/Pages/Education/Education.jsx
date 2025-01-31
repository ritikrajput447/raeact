import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from "react-icons/md";

import './Education.css'



const Education = () => {
    return (
        <>
            <div className="education" id='Education'>
                <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Education</h2>
                <hr></hr>
                <VerticalTimeline lineColor='#131301'>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2019 - 2023"
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">B.TECH</h3>
                        <h5 className="vertical-timeline-element-subtitle">MEERUT INSTITUTE OF TECHNOLOGY</h5>
                        {/* <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p> */}
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2018 - 2019"
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">12TH</h3>
                        <h5 className="vertical-timeline-element-subtitle">MILLENNIUM PUBLIC SCHOOL</h5>
                        {/* <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p> */}
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2016 - 2017"
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">10th</h3>
                        <h5 className="vertical-timeline-element-subtitle">MILLENNIUM PUBLIC SCHOOL</h5>
                        {/* <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p> */}
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </>
    )
}

export default Education