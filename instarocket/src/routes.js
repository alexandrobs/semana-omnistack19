import React from 'react';
import {createAppContainer, createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';
import { Image } from 'react-native';

import Feed from './pages/Feed';
import New from './pages/New';

import logo from './assets/logo.png'

export default createAppContainer(
    createStackNavigator({
        Feed,
        New,
    }, {    
        defaultNavigationOptions: {
            headerTintColor: '#000',
            headerBackTitle: null,
            headerTitle: <Image style={{marginHorizontal: 20}}source={logo} />
        },
        node: 'modal'
    })
);