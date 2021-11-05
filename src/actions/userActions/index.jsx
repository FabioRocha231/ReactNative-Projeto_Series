import firebase from 'firebase';

import { Alert } from 'react-native';

const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
const userLoginSuccess = (user) => ({
  type: USER_LOGIN_SUCCESS,
  user,
});

const USER_LOGOUT = 'USER_LOGOUT';
const userLogout = () => ({
  type: USER_LOGOUT,
});

const tryLogin =
  ({ email, password }) =>
  (dispatch) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        const action = userLoginSuccess(user);
        dispatch(action);
        return user;
      })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          return new Promise((resolve, reject) => {
            Alert.alert(
              'Usuario nao encontrado',
              'Deseja cadastrar um usuario com os dados inseridos?',
              [
                {
                  text: 'Não',
                  onPress: () => resolve(),
                  style: 'cancel', // Only IOS
                },
                {
                  text: 'Sim',
                  onPress: () => {
                    firebase
                      .auth()
                      .createUserWithEmailAndPassword(email, password)
                      .then((user) => resolve(user))
                      .catch(reject);
                  },
                },
              ],
              { cancelable: false },
            );
          });
        }
        return Promise.reject(error);
      });
  };

export { tryLogin, USER_LOGIN_SUCCESS, USER_LOGOUT };
