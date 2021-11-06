import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  line: {
    paddingTop: 3,
    paddingBottom: 3,
  },
  cell: {
    fontSize: 18,
    paddingHorizontal: 5,
  },
  negrito: {
    fontWeight: 'bold',
    flex: 1,
    textDecorationLine: 'underline',
    paddingBottom: 8,
  },
  conteudo: {
    flex: 3,
    textAlign: 'justify',
  },
  collapsed: {
    maxHeight: 65,
  },
  expanded: {
    flex: 1,
  },
});
