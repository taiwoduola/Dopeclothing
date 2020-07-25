import React from 'react';
import { connect } from 'react-redux';

import { selectItem } from '../../redux/reducers/shop/shop.selector';

import './itemscatergory.styles.scss';

import CollectionItem from '../../components/collection-item/collection-item.component';

const ItemCatergoryPage = ({ item }) => {
	const { title, items } = item;

	return (
		<div className="item-catergory">
			<h2 className="title"> {title.toUpperCase()} </h2>
			<div className="items">{items.map((item) => <CollectionItem key={item.id} item={item} />)}</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	item: selectItem(ownProps.match.params.itemId)(state)
});

export default connect(mapStateToProps)(ItemCatergoryPage);
