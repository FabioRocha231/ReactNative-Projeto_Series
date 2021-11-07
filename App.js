import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Setting a timer for a long period of time',
  'AsyncStorage has been extracted',
]);

export default from './src/SeriesApp';
