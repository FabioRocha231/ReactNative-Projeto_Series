import { SET_FIELD } from '../../actions';
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
    default:
      return state;
  }
}

export { serieFormReducer };
