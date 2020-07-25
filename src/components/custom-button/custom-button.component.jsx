import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, googleSignIn, addToCart, ...otherProps }) => (
	<button
		className={`${googleSignIn ? 'google-sign_in' : ''} ${addToCart ? 'add-to-cart' : ''}  custom-button`}
		{...otherProps}
	>
		{children}
	</button>
);

export default CustomButton;
