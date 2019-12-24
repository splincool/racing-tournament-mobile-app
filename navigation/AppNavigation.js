import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import ScreenOne from '../screens/ScreenOne';
import ChampionshipsScreen from '../screens/ChampionshipsScreen';


const MainNavigator = createStackNavigator({
  Championships: {screen: ChampionshipsScreen},
  One: ScreenOne
});



export const AppNavigation = createAppContainer(MainNavigator)