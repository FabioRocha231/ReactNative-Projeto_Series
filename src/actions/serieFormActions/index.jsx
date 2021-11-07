import firebase from 'firebase';

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

export { SET_FIELD, SERIE_SAVED_SUCCESS, setField, saveSerie };
