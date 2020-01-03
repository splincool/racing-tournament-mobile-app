import {createAppContainer} from 'react-navigation';
import {createStackNavigator, createSwitchNavigator} from 'react-navigation-stack';
import BottomTabNavigator from './BottomTabNavigator'

import {ChampDetailsScreen} from '../screens/ChampDetailsScreen';


const MainNavigator = createStackNavigator({
  Championships: {screen: BottomTabNavigator},
  Championship: { 
    screen: ChampDetailsScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.champName,
    }),
  }
});



export const AppNavigation = createAppContainer(MainNavigator)