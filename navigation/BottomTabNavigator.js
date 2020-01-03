import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import {ChampionshipsScreen} from '../screens/ChampionshipsScreen';
import {MenuScreen} from '../screens/MenuScreen';
import {LeaderboardScreen} from '../screens/LeaderboardScreen';
import {ProfileScreen} from '../screens/ProfileScreen';

const BottomTabNavigator = createBottomTabNavigator({
  Menu: MenuScreen,
  Championships: {screen: ChampionshipsScreen},
  Leaderboard: LeaderboardScreen,
  Profile: ProfileScreen,
}, 
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Menu') {
        iconName = `ios-menu`;
      } else if (routeName === 'Championships') {
        iconName = `ios-trophy`;
      } else if (routeName === 'Leaderboard') {
        iconName = `ios-podium`;
      } else if (routeName === 'Profile') {
        iconName = `ios-contact`;
      }

      // You can return any component that you like here!
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
    }),
    tabBarOptions: {
      // activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    },
  });

export default BottomTabNavigator;