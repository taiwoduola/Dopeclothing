import { createSelector } from 'reselect';

const selectCatergory = state => state.catergory;


export const selectCatergoryCatergories = createSelector(
    [selectCatergory],
    catergory => catergory.catergories
);