import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  line: {
    flexDirection: 'row',
    paddingTop: 3,
    paddingBottom: 3,
    borderWidth: 1,
    borderColor: '#C5C5C5',
  },
  cell: {
    fontSize: 18,
    paddingLeft: 5,
    //borderWidth: 1,
  },
  negrito: {
    fontWeight: 'bold',
    flex: 1,
  },
  conteudo: {
    flex: 3,
  },
  longLabel: {
    fontSize: 12,
  },
});
