import React from 'react';

export default function News(props) {
    return (
        <li className='news'>
            <a href={props.href}>{props.title}</a>
        </li>
    )
}