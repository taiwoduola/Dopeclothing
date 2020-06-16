import React from 'react';

import './itemspreview.styles.scss';


const ItemsPreview = ({title, price,imageUrl, id}) => (
    <div className='items-preview'>
        <div 
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='items-footer'>
            <span className='title'> {title.toUpperCase()} </span>
            <span className='price'> {price} </span>
        </div>
         
    </div>
)

export default ItemsPreview;