import React from 'react';
import NewsComponent from '../NewsComponent/NewsComponent';

export default function MOFALeaderNews() {
    return (
        <NewsComponent newsItems={[
            { headline: 'MOFA Leader News', href: 'http://mofa.gov.la/index.php/activities/mofa-leaders/4511-the-official-signing-ceremony-of-the-2022-2026-lao-pdr-un-unsdcf', title: 'The Official Signing Ceremony of the 2022-2026 Lao PDR-UN (UNSDCF)' },
            { href: 'http://mofa.gov.la/index.php/activities/mofa-leaders/4500-13th-high-level-roundtable-meeting-side-event-least-developed-country-ldc-graduation-toward-a-smooth-transition-strategy-sts', title: '13th High-Level Roundtable Meeting Side Event: Least Developed Country (LDC) Graduation: Toward a Smooth Transition Strategy (STS)' },
            { href: 'http://mofa.gov.la/index.php/activities/mofa-leaders/4281-14th-senior-officials-talks-between-the-lao-pdr-and-australia-further-strengthen-an-important-partnership', title: '14th Senior Officials Talks between the Lao PDR and Australia further strengthen an important partnership' },
            { href: 'http://mofa.gov.la/index.php/activities/mofa-leaders/3850-the-2030-agenda-for-sustainable-development-stakeholder-engagement-seminar-with-un-agencies,-international-organizations-and-development-partners-in-the-lao-pdr', title: 'The 2030 Agenda for Sustainable Development Stakeholder Engagement Seminar with UN Agencies, International Organizations and Development Partners in the Lao PDR' },
        ]} />
    )
}