import React from 'react';
import LaosEMagazine from '../../assets/images/laos-e-magazine.png';
import LaosEVisa from '../../assets/images/laos-e-visa.png';
import './Aside.css';

export default function Aside() {
    return (
        <aside className='d-flex flex-column justify-content-center align-items-center gap-3'>
            <ul>
                <li className='aside-element'>
                    <a href='#image-gallery'>Image Gallery</a>
                </li>
                <li className='aside-element'>
                    <a href='#legal-documents'>Legal Documents</a>
                </li>
                <li className='aside-element'>
                    <a href='#treaty-and-laws'>Treaty and Laws</a>
                </li>
                <li className='aside-element'>
                    <a href='#e-passport-form'>E-passport Application Form</a>
                </li>
                <li className='aside-element'>
                    <a href='#register'>The 3rd Mekong-Lancang Cooperation Leader's Meeting</a>
                </li>
                <li className='aside-element'>
                    <a href='#about-laos'>About Laos</a>
                </li>
                <li className='aside-element'>
                    <a href='#contact'>Contact Us</a>
                </li>
            </ul>
            <a href='#e-magazine'><img src={LaosEMagazine} width='300px' height='200px' alt='e-magazine' /></a>
            <a href='https://laoevisa.gov.la/'><img src={LaosEVisa} width='300px' height='200px' alt='evisa' /></a>
        </aside>
    )
}