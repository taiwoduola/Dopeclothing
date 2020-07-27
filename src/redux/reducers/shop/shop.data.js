//images
import blackLoofers from '../../../images/blackloofers.png';
// import blackPolo from '../../../images/blackpolo.png';
import denim from '../../../images/Denim.png';
// import grayHat from '../../../images/grayhat.png';
// import grayTop from '../../../images/graytop.png';
import brownShoes from '../../../images/brownshoes.png';

const SHOP_DATA = {
	mens: {
		title: 'mens',
		routeName: 'shop/mens',
		id: 1,
		items: [
			{
				imageUrl: blackLoofers,
				price: 35.0,
				id: 1,
				name: 'blackloofers'
			},
			{
				imageUrl: blackLoofers,
				price: 35.0,
				id: 2,
				name: 'blackloofers2'
			},
			{
				imageUrl: blackLoofers,
				price: 35.0,
				id: 3,
				name: 'blackloofers3'
			},
			{
				imageUrl: blackLoofers,
				price: 35.0,
				id: 4,
				name: 'blackloofers4'
			},
			{
				imageUrl: blackLoofers,
				price: 35.0,
				id: 5,
				name: 'blackloofers5'
			},
			{
				imageUrl: blackLoofers,
				price: 35.0,
				id: 6,
				name: 'blackloofers6'
			},
			{
				imageUrl: blackLoofers,
				price: 35.0,
				id: 7,
				name: 'blackloofers7'
			},
			{
				imageUrl: blackLoofers,
				price: 35.0,
				id: 8,
				name: 'blackloofers8'
			},
			{
				imageUrl: blackLoofers,
				price: 35.0,
				id: 9,
				name: 'blackloofers9'
			}
		]
	},
	womens: {
		id: 2,
		title: 'womens',
		routeName: 'shop/womens',
		items: [
			{
				imageUrl: denim,
				price: 45.0,
				id: 10,
				name: 'denim'
			},
			{
				imageUrl: denim,
				price: 45.0,
				id: 11,
				name: 'denim2'
			},
			{
				imageUrl: denim,
				price: 45.0,
				id: 12,
				name: 'denim3'
			},
			{
				imageUrl: denim,
				price: 45.0,
				id: 13,
				name: 'denim4'
			},
			{
				imageUrl: denim,
				price: 45.0,
				id: 14,
				name: 'denim5'
			},
			{
				imageUrl: denim,
				price: 45.0,
				id: 15,
				name: 'denim6'
			},
			{
				imageUrl: denim,
				price: 45.0,
				id: 16,
				name: 'denim7'
			},
			{
				imageUrl: denim,
				price: 45.0,
				id: 17,
				name: 'denim8'
			},
			{
				imageUrl: denim,
				price: 45.0,
				id: 18,
				name: 'denim9'
			}
		]
	},
	shoes: {
		title: 'shoes',
		routeName: 'shop/shoes',
		id: 3,
		items: [
			{
				imageUrl: brownShoes,
				price: 65.0,
				name: 'brownshoes',
				id: 19
			},
			{
				imageUrl: brownShoes,
				price: 65.0,
				name: 'brownshoes2',
				id: 20
			},
			{
				imageUrl: brownShoes,
				price: 65.0,
				name: 'brownshoes3',
				id: 21
			},
			{
				imageUrl: brownShoes,
				price: 65.0,
				name: 'brownshoes4',
				id: 22
			},
			{
				imageUrl: brownShoes,
				price: 65.0,
				name: 'brownshoes5',
				id: 23
			},
			{
				imageUrl: brownShoes,
				price: 65.0,
				name: 'brownshoes6',
				id: 24
			},
			{
				imageUrl: brownShoes,
				price: 65.0,
				name: 'brownshoes7',
				id: 25
			},
			{
				imageUrl: brownShoes,
				price: 65.0,
				name: 'brownshoes8',
				id: 26
			}
		]
	}
	// {
	//     imageUrl: grayTop,
	//     title: 'gray t-shirt',
	//     price: 35.00,
	//     id: 4
	// },
	// {
	//     imageUrl: blackPolo,
	//     title: 'black polo t-shirt',
	//     price: 15.00,
	//     id: 5
	// },
	// {
	//     imageUrl: grayHat,
	//     title: 'black loofers',
	//     price: 20.00,
	//     id: 6
	// },
	// {
	//     imageUrl: blackLoofers,
	//     title: 'black loofers',
	//     price: 35.00,
	//     id: 7
	// },
	// {
	//     imageUrl: denim,
	//     title: 'denim jacket',
	//     price: 45.00,
	//     id: 8
	// },
	// {
	//     imageUrl: brownShoes,
	//     title: 'brown shoes',
	//     price: 65.00,
	//     id: 9
	// },
	// {
	//     imageUrl: grayTop,
	//     title: 'gray t-shirt',
	//     price: 35.00,
	//     id: 10
	// },
	// {
	//     imageUrl: blackPolo,
	//     title: 'black polo t-shirt',
	//     price: 15.00,
	//     id: 11
	// },
	// {
	//     imageUrl: grayHat,
	//     title: 'black loofers',
	//     price: 20.00,
	//     id: 12
	// },
	// {
	//     imageUrl: blackLoofers,
	//     title: 'black loofers',
	//     price: 35.00,
	//     id: 13
	// },
	// {
	//     imageUrl: denim,
	//     title: 'denim jacket',
	//     price: 45.00,
	//     id: 14
	// },
	// {
	//     imageUrl: brownShoes,
	//     title: 'brown shoes',
	//     price: 65.00,
	//     id: 15
	// },
	// {
	//     imageUrl: grayTop,
	//     title: 'gray t-shirt',
	//     price: 35.00,
	//     id: 16
	// },
	// {
	//     imageUrl: blackPolo,
	//     title: 'black polo t-shirt',
	//     price: 15.00,
	//     id: 17
	// },
	// {
	//     imageUrl: grayHat,
	//     title: 'black loofers',
	//     price: 20.00,
	//     id: 18
	// }
};

export default SHOP_DATA;
