import cartActionType from './cart.types';


const toggleCartAction = () => ({
    type: cartActionType.TOGGLE_CART_HIDDEN
});

export default toggleCartAction;