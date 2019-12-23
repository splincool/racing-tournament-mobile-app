import React from 'react';
import {View,Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ScreenOne from '../screens/ScreenOne';
import ScreenTwo from '../screens/ScreenTwo';
import ScreenThree from '../screens/ScreenThree';

const BottomTabNavigator = createBottomTabNavigator({
  Championships: ScreenThree,
  One: ScreenOne,
  Two: ScreenTwo,
}, 
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'One') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      } else if (routeName === 'Two') {
        iconName = `ios-options`;
      } else if (routeName === 'Championships') {
        iconName = `md-home`;
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