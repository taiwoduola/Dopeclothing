import React from 'react';

import './collection-overview.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectItemsForPreview } from '../../redux/reducers/shop/shop.selector';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const CollectionOverview = ({ items }) => (
	<div className="collection-overview">
		{items.map(({ id, ...otherItemProps }) => <CollectionPreview key={id} {...otherItemProps} />)}
	</div>
);

const mapStateToProps = createStructuredSelector({
	items: selectItemsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
