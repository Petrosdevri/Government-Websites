import React from 'react';
import NewsComponent from '../NewsComponent/NewsComponent';

export default function Messages() {
    return (
        <NewsComponent newsItems={[
            { headline: 'Messages', href: 'http://mofa.gov.la/index.php/activities/messages/5815-message-of-congratulations-on-the-occasion-of-the-53th-anniversary-of-the-national-day-of-the-people-s-republic-of-bangladesh', title: 'Message of Congratulations on the occasion of the 53th Anniversary of the National Day of the People’s Republic of Bangladesh' },
            { href: 'http://mofa.gov.la/index.php/activities/messages/5806-message-of-condolence-about-the-mass-shooting-in-the-crocus-city-hallin-krasnogorsk-city-outskirt-of-moscow-on-22-march-2024', title: 'Message of Condolence for the mass shooting in the Crocus City Hallin Krasnogorsk City outskirt of Moscow on 22 March 2024.' },
            { href: 'http://mofa.gov.la/index.php/activities/messages/5794-congratulatory-messages-to-the-russian-president', title: 'Congratulatory Messages to the Russian President' },
            { href: 'http://mofa.gov.la/index.php/activities/messages/5763-congratulatory-message-on-the-45th-anniversary-of-the-national-day-of-islamic-republic-of-iran', title: 'Congratulatory Message on the 45th Anniversary of the National Day of Islamic Republic of Iran' }
        ]} />
    )
}