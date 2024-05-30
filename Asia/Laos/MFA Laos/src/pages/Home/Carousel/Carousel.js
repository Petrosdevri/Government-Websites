import React from 'react';
import { Carousel } from 'react-bootstrap';
import LaosLuxembourg from '../../../assets/images/laos-luxembourg.png';
import LaosTurkey from '../../../assets/images/laos-turkey.png';
import MekongLanechang from '../../../assets/images/mekong-lanechang.png';
import NewAmbassadors from '../../../assets/images/new-ambassadors.png';
import UNCouncil from '../../../assets/images/un-council.png';
import './Carousel.css';

export default function HomeCarousel() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img src={MekongLanechang} height='150px' alt='mekong-lanechang' />
                <Carousel.Caption>
                    <p>Congratulatory Message on the occasion of the 8th Anniversary of the Establishment of Mekong-Lancang Cooperation</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={UNCouncil} alt='un-council' />
                <Carousel.Caption>
                    <p>Lao delegation participated in the 55th Session of the UN Human Rights Council</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={NewAmbassadors} alt='new-ambassadors' />
                <Carousel.Caption>
                    <p>DPM, Foreign Minister received a courtesy call from new Ambassadors to Lao PDR</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={LaosLuxembourg} alt='laos-luxembourg' />
                <Carousel.Caption>
                    <p>Laos - Luxembourg agreed to strengthen the cooperations</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={LaosTurkey} alt='laos-turkey' />
                <Carousel.Caption>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
} 