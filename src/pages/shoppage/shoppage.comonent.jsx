import React from 'react';

import { Route } from 'react-router-dom';

import './shoppage.styles.scss';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import ItemCatergoryPage from '../itemscatergory/itemscatergory.component';

const ShopPage = ({ match }) => (
	<div className="shop-page">
		<div className="shop-layout">
			<Route exact path={`${match.path}`} component={CollectionOverview} />
			<Route path={`${match.path}/:itemId`} component={ItemCatergoryPage} />
		</div>
	</div>
);

export default ShopPage;
