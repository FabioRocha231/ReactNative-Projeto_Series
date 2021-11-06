import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginPage from './pages/LoginPage';
import { SeriesPage } from './pages/SeriesPage';
import { SerieDetailPage } from './pages/SerieDetailPage';

const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: SeriesPage,
    },
    SerieDetail: {
      screen: SerieDetailPage,
      navigationOptions: ({ navigation }) => {
        const { serie } = navigation.state.params;

        return {
          title: serie.title,
        };
      },
    },
    Login: {
      screen: LoginPage,
      navigationOptions: {
        title: 'Bem vindo!',
      },
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
