//import seriesMock from '../../../series.json';

import { SET_SERIES } from '../../actions';

function serieReducer(state = null, action) {
  switch (action.type) {
    case SET_SERIES:
      return action.series;
    default:
      return state;
  }
}

export { serieReducer };
