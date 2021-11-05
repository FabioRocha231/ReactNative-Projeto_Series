import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 200,
  },
  textInput: {
    borderBottomWidth: 1,
    marginBottom: 5,
    borderBottomColor: '#C5C5C5',
    paddingHorizontal: 5,
  },
  login: {
    textAlign: 'center',
    color: '#FFFFFF',
  },
  Button: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 5,
  },
  Logado: {
    paddingVertical: 5,
    backgroundColor: '#6ca',
    marginTop: 5,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  error: {
    backgroundColor: '#FF6978',
  },
  message: {
    textAlign: 'center',
    color: 'white',
  },
  background: {
    justifyContent: 'center',
    height: 270,
    backgroundColor: '#73323E',
    borderRadius: 20,
    paddingBottom: 20,
    elevation: 3,
  },
});
