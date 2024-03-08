import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '../pages/home';

const Tab = createMaterialTopTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        lazy: true,
        tabBarScrollEnabled: true,
        tabBarItemStyle: {
          width: 80,
        },
        tabBarIndicatorStyle: {
          height: 4,
          width: 20,
          marginLeft: 30,
          borderRadius: 2,
          backgroundColor: 'green',
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: '#333',
      }}>
      <Tab.Screen name="Home" component={Home} options={{title: '推荐'}} />
    </Tab.Navigator>
  );
}

export default HomeTabs;
