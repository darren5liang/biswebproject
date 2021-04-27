/**
 *
 * Asynchronously loads the component for Liang
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
