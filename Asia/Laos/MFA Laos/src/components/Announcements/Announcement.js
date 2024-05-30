import React from 'react';

export default function Announcement(props) {
    return (
        <li className='announcement-element'>
            <a href={props.href}>{props.announcement} </a> 
            { props.date && props.year ? <span className='announcement-date'><em>({props.date}<sup>th</sup>, {props.year})</em></span> : '' }
        </li>
    )
}