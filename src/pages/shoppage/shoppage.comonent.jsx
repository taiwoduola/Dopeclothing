import React from 'react';

import './shoppage.styles.scss';

//shop Data
import SHOP_DATA from './shop.data';
import ItemsPreview from '../../components/itemspreview/itemspreview.component';


class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: SHOP_DATA    
        }
    }

    render() {
        const {items} = this.state
        return(
            <div className='shop-page'>
                <div className='shop-layout'>
                    {
                        items.map(({id, ...otherItemProps}) => (
                            <ItemsPreview key={id} {...otherItemProps} />
                        ))
                    }
               </div>
            </div>
        )
    }
}

export default ShopPage;