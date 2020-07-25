import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectItems = createSelector([ selectShop ], (shop) => shop.items);

export const selectItemsForPreview = createSelector([ selectItems ], (items) =>
	Object.keys(items).map((key) => items[key])
);

export const selectItem = (itemUrlParam) => createSelector([ selectItems ], (items) => items[itemUrlParam]);
