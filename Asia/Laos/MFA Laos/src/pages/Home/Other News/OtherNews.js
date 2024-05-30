import React from 'react';
import NewsComponent from '../NewsComponent/NewsComponent';

export default function OtherNews() {
    return (
        <NewsComponent newsItems={[
            { headline: 'Other News', href: 'http://mofa.gov.la/index.php/activities/other-news/2925-the-lao-delegation-attended-the-un-review-on-its-implementation-under-the-international-convention-on-elimination-of-all-forms-of-discrimination-against-women-cedaw-in-geneva,-switzerland', title: 'The Lao Delegation Attended the UN Review on its Implementation Under the International Convention on Elimination of All Forms of Discrimination Against Women (CEDAW) in Geneva, Switzerland' },
            { href: 'http://mofa.gov.la/index.php/activities/other-news/2218-minister-to-the-prime-minister%E2%80%99s-office-attending-asean-india-business-and-investment-meet-and-expo', title: 'Minister to the Prime Minister’s Office attending ASEAN-India Business and Investment Meet and Expo' },
            { href: 'http://mofa.gov.la/index.php/activities/other-news/1974-keynote-address-by-his-excellency-alounkeo-kittikhoun,-minister-to-the-prime-minister%E2%80%99s-office-on-the-occasion-of-the-50th-anniversary-of-the-founding-of-asean-and-the-20th-anniversary-of-lao-pdr%E2%80%99s-accession-to-asean', title: 'Keynote Address by H.E Alounkeo KITTIKHOUN, Minister to the Prime Minister’s Office on the Occasion of the 50th Anniversary of the Founding of ASEAN and the 20th Anniversary of Lao PDR’s Accession to ASEAN' }
        ]} />
    )
}