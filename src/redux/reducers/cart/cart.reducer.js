import cartActionType from './cart.types'

import addItemToCart, { reduceItemFromCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case cartActionType.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }

        case cartActionType.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }

        case cartActionType.REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            }

        case cartActionType.REDUCE_ITEM:
            return {
                ...state,
                cartItems: reduceItemFromCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
 
}

export default cartReducer;