import firebase from 'firebase';
import { Alert } from 'react-native';

const SET_SERIES = 'SET_SERIES';

const setSeries = (series) => ({
  type: SET_SERIES,
  series,
});

const watchSeries = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/series`)
      .on('value', (snapshot) => {
        const series = snapshot.val();
        const action = setSeries(series);
        dispatch(action);
      });
  };
};

const deleteSerie = (serie) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Alert.alert(
        'Deletar',
        `Deseja realmente deletar a serie ${serie.title}?`,
        [
          {
            text: 'Nao',
            onPress: () => {
              resolve(false);
            },
            style: 'cancel', // only IOS
          },
          {
            text: 'Sim',
            onPress: async () => {
              const { currentUser } = firebase.auth();
              try {
                await firebase
                  .database()
                  .ref(`/users/${currentUser.uid}/series/${serie.id}`)
                  .remove();
                resolve(true);
              } catch (error) {
                reject(error);
              }
            },
          },
        ],
        { cancelable: false },
      );
    });
  };
};

export { watchSeries, deleteSerie, SET_SERIES };
