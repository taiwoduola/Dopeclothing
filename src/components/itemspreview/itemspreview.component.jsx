import React from 'react';

import { connect } from 'react-redux';
import {addItem} from '../../redux/reducers/cart/cart.action';

import './itemspreview.styles.scss';


import CustomButton from '../custom-button/custom-button.component';


const ItemsPreview = ({item, addItem}) => {
    return (
    <div className='items-preview'>
        <div 
            className='image'
            style={{
                backgroundImage: `url(${item.imageUrl})`
            }}
        />
        <div className='items-footer'>
            <span className='title'> {item.title.toUpperCase()} </span>
            <span className='price'> {item.price} </span>
        </div>
         
         <CustomButton onClick={() => addItem(item) } addToCart> Add To Cart </CustomButton>
    </div>
)};


const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});



export default connect(null, mapDispatchToProps)(ItemsPreview);