import React from 'react';
import './Footer.css';

export default function Footer() {
    let date = new Date();
    let year = date.getFullYear();

    return (
        <footer className='p-4'>
            <h5>Copyright © <span id='year'>{year}</span>, Ministry of Foreign Affairs of LAO PDR. All Rights Reserved.</h5>
            <p>23 Singha Road, Phonesay Village, Xaysettha District, Vientiane.</p>
        </footer>
    )
}