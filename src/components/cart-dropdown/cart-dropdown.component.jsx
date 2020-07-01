import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/reducers/cart/cart.selector';
import {withRouter} from 'react-router-dom';
import toggleCartHidden from '../../redux/reducers/cart/cart.action';

import './cart-dropdown.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../../components/cart-item/cart-item.component';


const CartDropDown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            ) : (
                <span className='message'> Your cart is empty </span>
            )
            }
        </div>
        <CustomButton onClick={() => { 
             history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>
            GO TO CHECKOUT
        </CustomButton>
    </div>
);

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropDown));