import { SET_FIELD, SERIE_SAVED_SUCCESS } from '../../actions';
const INITIAL_STATE = {
  title: '',
  gender: 'policial',
  rate: 0,
  img: '',
  description: '',
};

function serieFormReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_FIELD:
      const newState = { ...state };
      newState[action.field] = action.value;
      return newState;
    case SERIE_SAVED_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export { serieFormReducer };
