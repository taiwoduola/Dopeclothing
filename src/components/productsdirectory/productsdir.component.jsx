import React from 'react';

import './productsdir.styles.scss';


//images
import blackLoofers from '../../images/blackloofers.png';
import blackPolo from '../../images/blackpolo.png';
import denim from '../../images/Denim.png';
import grayHat from '../../images/grayhat.png';
import grayTop from '../../images/graytop.png';
import brownShoes from '../../images/brownshoes.png';


//components
import Products from '../products/products.component';


class ProductsDir extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            products: [
                {
                    imageUrl: blackLoofers,
                    title: 'black loofers',
                    price: '$35.00',
                    id: 1
                },
                {
                    imageUrl: denim,
                    title: 'denim jacket',
                    price: '$45.00',
                    id: 2
                },
                {
                    imageUrl: brownShoes,
                    title: 'brown shoes',
                    price: '$65.00',
                    id: 3
                },
                {
                    imageUrl: grayTop,
                    title: 'gray t-shirt',
                    price: '$35.00',
                    id: 4
                },
                {
                    imageUrl: blackPolo,
                    title: 'black polo t-shirt',
                    price: '$15.00',
                    id: 5
                },
                {
                    imageUrl: grayHat,
                    title: 'black loofers',
                    price: '$20.00',
                    id: 6
                }
            ]
        }


    }


    render() {
        return(

            <div className='productsdir'>
                {
                    this.state.products.map(({id, ...otherProductProps}) => (
                        <Products key={id} {...otherProductProps} />
                    ))
                }

            </div>
        )
    }
}

export default ProductsDir;