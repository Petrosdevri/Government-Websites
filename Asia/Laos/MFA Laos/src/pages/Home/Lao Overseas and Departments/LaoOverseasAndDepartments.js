import React from 'react';
import NewsComponent from '../NewsComponent/NewsComponent';

export default function LaoOverseasAndDepartments() {
    return (
        <NewsComponent newsItems={[
            { headline: 'Lao Overseas and Departments', href: 'http://mofa.gov.la/index.php/activities/lao-overseas-and-departments/5758-38th-meeting-of-asean-intergovernmental-commission-on-human-rights-aichr', title: '38th Meeting of ASEAN Intergovernmental Commission on Human Rights (AICHR)' },
            { href: 'http://mofa.gov.la/index.php/activities/lao-overseas-and-departments/5740-lao-ambassador-presents-the-letter-of-credentials-to-his-royal-highness-grand-duke-henri-of-luxembourg', title: 'Lao Ambassador presented the letter of credentials to His Royal Highness Grand Duke Henri of Luxembourg' },
            { href: 'http://mofa.gov.la/index.php/activities/lao-overseas-and-departments/5650-laos-and-botswana-sign-the-joint-communique-on-the-establishment-of-diplomatic-relations', title: 'Laos and Botswana sign the Joint Communique on the Establishment of Diplomatic Relations' },
            { href: 'http://mofa.gov.la/index.php/activities/lao-overseas-and-departments/4825-lao-ambassador-presents-the-letter-of-credentials-to-the-governor-general-of-new-zealand-2', title: 'Lao Ambassador Presents the Letter of Credentials to the Governor-General of New Zealand' },
        ]} />
    )
}