import React from 'react';
import HomeCarousel from './Carousel/Carousel.js';
import MOFALeaderNews from './MOFA Leader News/MOFALeaderNews.js';
import LaoOverseasAndDepartments from './Lao Overseas and Departments/LaoOverseasAndDepartments.js';
import Messages from './Messages/Messages.js';
import OtherNews from './Other News/OtherNews.js';
import './Home.css';

export default function Home() {
    return (
        <section className='home d-flex flex-column justify-content-center align-items-center gap-4'>
            {/* <HomeCarousel /> */}
            <MOFALeaderNews />
            <LaoOverseasAndDepartments />
            <OtherNews />
            <Messages />
        </section>
    )
}