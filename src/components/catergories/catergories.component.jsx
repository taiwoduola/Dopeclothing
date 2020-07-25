import React from 'react';
import './catergories.styles.scss';

//components
import Collections from '../collections/collections.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCatergoryCatergories } from '../../redux/reducers/catergory/catergory.selector';

const Catergory = ({ catergories }) => (
	<div className="catergories">
		{catergories.map(({ id, ...otherCatergoryProps }) => <Collections key={id} {...otherCatergoryProps} />)}
	</div>
);

const mapStateToProps = createStructuredSelector({
	catergories: selectCatergoryCatergories
});

export default connect(mapStateToProps)(Catergory);
