import React from 'react';

import './customform.styles.scss';


const CustomForm = ({handleChange, label, ...otherProps}) => (
    <div className='custom-form'>
        <input className='form-input' onChange={handleChange} />
        {
            label ? (
                <label
                    className={`${
                        otherProps.value.length ? 'shrink' : ''
                    } form-label`}
                >
                    {label}
                </label>
            ) : null}
    </div>
)

export default CustomForm;