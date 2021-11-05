import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginPage from './pages/LoginPage';
import { SeriesPage } from './pages/SeriesPage';

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginPage,
      navigationOptions: {
        title: 'Bem vindo!',
      },
    },
    Main: {
      screen: SeriesPage,
    },
  },
  {
    defaultNavigationOptions: {
      title: 'Series!',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#6ca',
        borderBottomWidth: 1,
        borderBottomColor: '#C5C5C5',
        borderRadius: 20,
      },
      headerTitleStyle: {
        textAlign: 'center',
        color: '#fff',
      },
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
