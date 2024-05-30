import React from 'react';
import Announcement from './Announcement';
import LPRP from '../../assets/images/lprp.png';
import './Announcements.css';

export default function Announcements() {
    return (
        <aside className='d-flex flex-column justify-content-center align-items-center gap-3'>
            <section className='announcements'>
                <h5><em>Announcements</em></h5>
                <ul>
                    <Announcement href='http://mofa.gov.la/index.php/statements/asean-statements/5830-asean-foreign-ministers-statement-on-the-escalation-of-conflicts-in-myanmar-18-april-2024' announcement='ASEAN FOREIGN MINISTERS’ STATEMENT ON THE ESCALATION OF CONFLICTS IN MYANMAR' date='April 18' year='2024' />
                    <Announcement href='http://mofa.gov.la/index.php/activities/state-leaders/5709-press-conference-by-h-e-saleumxay-kommasith-deputy-prime-minister-minister-of-foreign-affairs-of-the-lao-pdr' announcement='Press Conference by H.E. Saleumxay KOMMASITH, Deputy Prime Minister, Minister of Foreign Affairs of the Lao PDR' date='January 29' year='2024' />
                    <Announcement href='http://www.mofa.gov.la/index.php/statements/press-statements/5708-press-statement-by-the-chair-of-the-asean-foreign-ministers-retreat-29-january-2024-luang-prabang-lao-pdr' announcement={`Press Statement by the Chair of the ASEAN Foreign Ministers' Retreat`} date='January 29' year='2024' />
                    <Announcement href='http://www.mofa.gov.la/index.php/statements/asean-statements/5666-asean-foreign-ministers-statement-on-the-earthquake-in-japan' announcement='ASEAN FOREIGN MINISTERS’ STATEMENT ON THE EARTHQUAKE IN JAPAN' date='January 4' year='2024' />
                    <Announcement href='https://laoschairmanship2024.gov.la/' announcement={`Official Website for the Lao PDR’s ASEAN Chairmanship in 2024`} date='Noverber 17' year='2023' />
                    <Announcement href='http://www.mofa.gov.la/index.php/statements/notices/5595-the-theme-and-logo-for-the-lao-pdr-s-asean-chairmanship-in-2024' announcement='The Theme and Logo for the Lao PDR’s ASEAN Chairmanship in 2024' date='April 18' year='2023' />
                    <Announcement href='http://www.mofa.gov.la/index.php/statements/asean-statements/5617-the-lao-pdr-s-asean-chairmanship-2024' announcement={`Info: The Lao PDR's ASEAN Chairmanship 2024`} date='' year='' />
                    <Announcement href='http://www.mofa.gov.la/index.php/statements/mofa-statement/5541-statement-of-ministry-of-foreign-affairs-of-the-lao-people-s-democratic-republic-on-the-current-violent-hostilities-between-israel-and-palestine' announcement='Statement of Ministry of Foreign Affairs of the Lao People’s Democratic Republic on the current violent hostilities between Israel and Palestine' date='October 10' year='2023' />
                    <Announcement href='http://www.mofa.gov.la/index.php/statements/mofa-statement/5411-statement-of-the-ministry-of-foreign-affairs-of-the-lao-people-s-democratic-on-the-use-of-cluster-munitions' announcement={`Statement of the Ministry of Foreign Affairs of the Lao People's Democratic Republic on the use of Cluster Munitions.`} date='July 10' year='2023' />
                </ul>
            </section>
            <img src={LPRP} width='300px' height='175px' alt='lprp' />
            <section className='laos-diplomacy-anniversary'>
                <h5><em>70th Anniversary of Lao Diplomacy</em></h5>
            </section>
        </aside>
    )
}