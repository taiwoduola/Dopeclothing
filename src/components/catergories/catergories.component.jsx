import React from 'react';
import './catergories.styles.scss';

//images
import blueStripe from '../../images/bluestripe.png';
import denim from '../../images/Denim.png';
import grayHat from '../../images/grayhat.png';


//components
import Collections from '../collections/collections.component';


class Catergory extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            catergories: [
                {
                    id: 1,
                    imageUrl: blueStripe,
                    title: 'men',
                    items: '35 items',
                    style: 'menstyle'
                },
                {
                    id: 2,
                    imageUrl: denim,
                    title: 'women',
                    items: '47 items',
                    style: 'womenstyle'
                },
                {
                    id: 3,
                    imageUrl: grayHat,
                    title: 'hat',
                    items: '25 items',
                    style: 'hatstyle'
                }
            ]
        }

    }

    render() {
        return(
            <div className='catergories'>
                {
                    this.state.catergories.map(({id, ...otherCatergoryProps}) => (
                        <Collections key={id} {...otherCatergoryProps} />
                    ))
                }

            </div>
        )
    }
}

export default Catergory;