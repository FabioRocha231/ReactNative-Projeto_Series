import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    height: Dimensions.get('window').width / 2,

    //borderWidth: 1,
    //borderColor: 'blue',
  },
  card: {
    flex: 1,
    borderWidth: 1,
  },
  cardTitleWrapper: {
    backgroundColor: 'black',
    height: 50,

    position: 'absolute',
    bottom: 0,
    opacity: 0.8,

    width: '100%',
    paddingTop: 10,
    paddingHorizontal: 3,
    alignItems: 'center',
  },
  cardTitle: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  firstColumn: {
    paddingLeft: 10,
  },
  lastColumn: {
    paddingRight: 10,
  },
});
