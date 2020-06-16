import React from 'react';

import './products.styles.scss';


const Products = ({imageUrl, title, price}) => (
    <div className='product-preview'>
        <div 
            className='product-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='product-footer'>
            <span className='title'>{title.toUpperCase()}</span>
            <span className='price'>{price}</span>
        </div>
    </div>
     
   
)

export default Products;