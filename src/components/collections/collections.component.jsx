import React from 'react';

import './collections.styles.scss';


const Collections = ({title, items, imageUrl, style}) => (
   <div className= {`${style} collections`}
        style={{
            backgroundImage: `url(${imageUrl})`
            }}           
    >
       <div className='content'>
            <span className='title'> {title} </span>
            <span className='items'> {items} </span>
       </div>
   </div>
);

export default Collections;