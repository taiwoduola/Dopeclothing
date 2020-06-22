import React from 'react';


import './custom-button.styles.scss';


const CustomButton = ({children, googleSignIn, ...otherProps}) => (
    <button 
        className= {`${googleSignIn ? 'google-sign_in' : ''} custom-button`} 
        {...otherProps}
    >
        {children}
    </button>
);

export default CustomButton;