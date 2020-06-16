import React from 'react';
import './minihero.styles.scss';

//images
import brownLoofers from '../../images/brownloofers.png';

const MiniHero = () => (
    <div style={{
        backgroundImage: `url(${brownLoofers})`
        }}
        className='arrivals'
    >
        <div className='page_infos'>
            <p className='paragraphs'>#new summer collection 2020</p>
            <h2 className='titles'>new shoes</h2>
        </div>
    </div>
);

export default MiniHero;