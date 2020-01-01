import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import ScreenOne from '../screens/ScreenOne';
import ChampionshipsScreen from '../screens/ChampionshipsScreen';
import {ChampDetailsScreen} from '../screens/ChampDetailsScreen';


const MainNavigator = createStackNavigator({
  Championships: {screen: ChampionshipsScreen},
  Championship: { 
    screen: ChampDetailsScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.champName,
    }),
  }
});



export const AppNavigation = createAppContainer(MainNavigator)