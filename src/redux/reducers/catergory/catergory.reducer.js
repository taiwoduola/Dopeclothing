//images
import blueStripe from '../../../images/bluestripe.png';
import denim from '../../../images/Denim.png';
import grayHat from '../../../images/grayhat.png';

const INITIAL_STATE = {
	catergories: [
		{
			id: 1,
			imageUrl: blueStripe,
			title: 'mens',
			items: '35 items',
			gridItem: 'menstyle',
			linkUrl: 'shop/mens'
		},
		{
			id: 2,
			imageUrl: denim,
			title: 'womens',
			items: '47 items',
			gridItem: 'womenstyle',
			linkUrl: 'shop/womens'
		},
		{
			id: 3,
			imageUrl: grayHat,
			title: 'shoes',
			items: '25 items',
			gridItem: 'hatstyle',
			linkUrl: 'shop/shoes'
		}
	]
};

const catergoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default catergoryReducer;
