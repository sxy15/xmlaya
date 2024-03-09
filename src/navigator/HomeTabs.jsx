import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '../pages/home';
import TopTabBar from '@pages/home/TopTabBar';

const Tab = createMaterialTopTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      tabBar={props => <TopTabBar {...props} />}
      sceneContainerStyle={{
        backgroundColor: 'transparent',
      }}
      screenOptions={{
        lazy: true,
        tabBarScrollEnabled: true,
        tabBarStyle: {
          elevation: 0,
          flex: 1,
          backgroundColor: 'transparent',
          overflow: 'hidden',
        },
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
