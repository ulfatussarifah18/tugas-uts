import * as React from 'react';
import {Text, View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './Home';
import user from './user';
import Transaksi from './Transaksi';
import Booknow from './Booknow';
import Notifikasi from './Notifikasi';

const Tab = createMaterialBottomTabNavigator();

export default function Router() {
  return (
    <Tab.Navigator
      initialRouteName="HomeHome"
      activeColor="#e91e63"
      labelStyle={{fontSize: 12}}
      style={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Ionicons name="home-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Transaksi"
        component={Transaksi}
        options={{
          tabBarLabel: 'Transaksi',
          tabBarIcon: ({color}) => (
            <Ionicons name="bag-handle-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Booknow"
        component={Booknow}
        options={{
          tabBarLabel: 'BookNow',
          tabBarIcon: ({color}) => (
            <Ionicons name="calendar-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="user"
        component={user}
        options={{
          tabBarLabel: 'user',
          tabBarIcon: ({color}) => (
            <Ionicons name="person-circle-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
