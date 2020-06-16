import React from 'react';
import './hero.styles.scss';

//images
import pngfuel from '../../images/pngfuel.com.png';

const Hero = () => (
    <div style={{
        backgroundImage: `url(${pngfuel})`
        }}
        className='arrival'
    >
        <div className='page_info'>
            <p className='paragraph'>#new summer collection 2020</p>
            <h2 className='title'>arrivals sales</h2>
        </div>
    </div>
);

export default Hero;