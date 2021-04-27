import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the darren state domain
 */

const selectDarrenDomain = state => state.darren || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Darren
 */

const makeSelectDarren = () =>
  createSelector(
    selectDarrenDomain,
    substate => substate,
  );

export default makeSelectDarren;
export { selectDarrenDomain };
