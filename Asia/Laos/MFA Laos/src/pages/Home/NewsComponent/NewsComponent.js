import React from 'react';
import News from './News';

export default function NewsComponent({ newsItems }) {
    return (
        <section className='news-component'>
            <h5><em>{newsItems[0]?.headline}</em></h5>
            <ul>
                {newsItems.map((item, index) => (
                    <News key={index} href={item.href} title={item.title} />
                ))}
            </ul>
        </section>
    )
}