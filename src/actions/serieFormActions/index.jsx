import firebase from 'firebase';

const SET_WHOLE_SERIE = 'SET_WHOLE_SERIE';
const setWholeSerie = (serie) => ({
  type: SET_WHOLE_SERIE,
  serie,
});

const SET_FIELD = 'SET_FIELD';
const setField = (field, value) => {
  return {
    type: SET_FIELD,
    field,
    value,
  };
};

const SERIE_SAVED_SUCCESS = 'SERIE_SAVED_SUCCESS';
const serieSavedSuccess = () => ({
  type: SERIE_SAVED_SUCCESS,
});

const RESET_FORM = 'RESET_FORM';
const resetForm = () => ({
  type: RESET_FORM,
});

const saveSerie = (serie) => {
  const { currentUser } = firebase.auth();
  return async (dispatch) => {
    await firebase
      .database()
      .ref(`/users/${currentUser.uid}/series`)
      .push(serie);
    dispatch(serieSavedSuccess());
  };
};

export {
  SET_FIELD,
  SERIE_SAVED_SUCCESS,
  SET_WHOLE_SERIE,
  RESET_FORM,
  resetForm,
  setWholeSerie,
  setField,
  saveSerie,
};
