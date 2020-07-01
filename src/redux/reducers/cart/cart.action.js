import cartActionType from './cart.types';


const toggleCartAction = () => ({
    type: cartActionType.TOGGLE_CART_HIDDEN 
});

export default toggleCartAction;


export const addItem = item => ({
    type: cartActionType.ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: cartActionType.REMOVE_ITEM,
    payload: item
});

export const reduceItem = item => ({
    type: cartActionType.REDUCE_ITEM,
    payload: item
});