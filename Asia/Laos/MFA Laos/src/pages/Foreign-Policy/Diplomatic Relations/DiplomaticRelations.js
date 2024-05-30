import React from 'react';
import '../ForeignPolicy.css';
import ListOfStates from '../../../assets/images/list-of-states-which-the-lao-pdr-has-established-diplomatic-relations.png';

export default function DiplomaticRelations() {
    return (
        <section className='diplomatic-relations d-flex flex-column jsutify-content-center align-items-center gap-2'>
            <h5>Diplomatic Relations</h5>
            <img src={ListOfStates} width='100%' height='500px' alt='list-of-states' />
        </section>
    )
}