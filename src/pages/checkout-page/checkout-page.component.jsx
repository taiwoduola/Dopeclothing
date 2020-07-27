import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/reducers/cart/cart.selector';

import './checkout-page.styles.scss';
import CheckoutItems from '../../components/checkout-items/checkout-items.component';

const CheckOutpage = ({ cartItems, total }) => (
	<div className="checkout-page">
		<div className="checkout-header">
			<div className="header-block">
				<span>Image</span>
			</div>

			<div className="header-block">
				<span>Product</span>
			</div>

			<div className="header-block">
				<span>Quantity</span>
			</div>

			<div className="header-block">
				<span>Price</span>
			</div>

			{/* <div className='header-block'>
                <span>Total</span>
            </div> */}

			<div className="header-block">
				<span>Remove</span>
			</div>
		</div>

		{cartItems.map((cartItem) => <CheckoutItems key={cartItem.id} cartItem={cartItem} />)}

		<div className="total">
			<span> TOTAL:${total} </span>
		</div>
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal
	// itemTotal: selectCartItemTotal
});

export default connect(mapStateToProps)(CheckOutpage);
