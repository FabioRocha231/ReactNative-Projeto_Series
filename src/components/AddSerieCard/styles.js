import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '50%',
    padding: 5,
    height: Dimensions.get('window').width / 2,

    //borderWidth: 1,
    //borderColor: 'blue',
  },
  card: {
    flex: 1,
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
  image: {
    width: '100%',
    height: '100%',
  },
  firstColumn: {
    paddingLeft: 10,
  },
  lastColumn: {
    paddingRight: 10,
  },
});
