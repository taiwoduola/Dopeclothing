import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/reducers/user/user.selector';
import { selectCartHidden } from '../../redux/reducers/cart/cart.selector';

//logo
// import { ReactComponent as Logo } from '../assets/dopelogo.svg';

import './nav.styles.scss';
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
// import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
// import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

//Cart Icon component
import CartIcon from '../cart-icon/cart-icon.component';
import { createStructuredSelector } from 'reselect';

const Navs = ({ currentUser, hidden }) => (
	<div className="navigations">
		<Link className="logo-container" to="/">
			dope
		</Link>

		<div className="navs">
			<Link className="nav nav-home" to="/">
				home
			</Link>
			<Link className="nav" to="/shop">
				{' '}
				shop{' '}
			</Link>
			<Link className="nav" to="/shop">
				{' '}
				new arrivals{' '}
			</Link>
			<Link className="nav" to="/shop">
				{' '}
				contact{' '}
			</Link>
		</div>

		<div className="nav-icons">
			<Link className="icons" to="/shop">
				<FontAwesomeIcon icon={faSearch} />
			</Link>
			<Link className="icons" to="/shop">
				<FontAwesomeIcon icon={faHeart} />
			</Link>

			<CartIcon />

			{currentUser ? (
				<div className="icons" onClick={() => auth.signOut()}>
					Sign out
				</div>
			) : (
				<Link className="icons" to="/signin">
					Sign in
				</Link>
			)}
		</div>
		{hidden ? null : <CartDropDown />}
	</div>
);

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});

export default connect(mapStateToProps)(Navs);
