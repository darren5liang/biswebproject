import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the liang state domain
 */

const selectLiangDomain = state => state.liang || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Liang
 */

const makeSelectLiang = () =>
  createSelector(
    selectLiangDomain,
    substate => substate,
  );

export default makeSelectLiang;
export { selectLiangDomain };
