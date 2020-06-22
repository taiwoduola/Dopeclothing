import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';


import './nav.styles.scss';
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
// import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


const Navs = ({currentUser}) => (
    <div className='navigations'>
        <Link className='logo-container' to='/'> dopeLogo </Link>

        <div className='navs'>
            <Link className='nav' to='/'>home</Link>
            <Link className='nav' to='/shop'> shop </Link>
            <Link className='nav' to='/shop'> new arrivals </Link>
            <Link className='nav' to='/shop'> contact </Link>
        </div>

        <div className='nav-icons'>
            <Link className='icons' to='/shop'>
                <FontAwesomeIcon icon={faSearch} />
            </Link>
            <Link className='icons' to='/shop'>
                <FontAwesomeIcon icon={faHeart} />
            </Link>
            <Link className='icons' to='/shop'>
                <FontAwesomeIcon icon={faShoppingCart} />
            </Link>

            {
                currentUser ? (
                <div className='icons' onClick={() => auth.signOut()}>
                    Sign out
                </div>
                ) : (
                <Link className='icons' to='/signin'>
                    Sign in
                </Link>
            )}

        </div>
    </div>
);

export default Navs;