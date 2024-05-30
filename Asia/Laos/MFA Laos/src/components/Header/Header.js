import React from 'react';
import { Stack } from 'react-bootstrap';
import LaosEmblem from '../../assets/images/laos-emblem.png';
import LaosFlag from '../../assets/images/laos-flag.png';
import './Header.css';

export default function Header() {
    return (
        <header className='d-flex justify-content-center align-items-center p-4'>
            <Stack direction='horizontal' gap={5}>
                <img src={LaosFlag} alt='laos-flag' />
                <h1>Ministry of Foreign Affairs of Laos</h1>
                <h5><strong>mofa.gov.la</strong></h5>
                <img src={LaosEmblem} alt='laos-emblem' />
            </Stack>
        </header>
    )
}