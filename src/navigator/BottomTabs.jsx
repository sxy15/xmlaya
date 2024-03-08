import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Listen from '@pages/Listen';
import Found from '@pages/Found';
import Account from '@pages/Account';
import HomeTabs from './HomeTabs';
import IconShouye from '@assets/iconfont/IconShouye';
import IconShoucang from '@assets/iconfont/IconShoucang';
import IconFaxian from '@assets/iconfont/IconFaxian';
import IconUser from '@assets/iconfont/IconUser';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'green',
        tabBarLabelStyle: {
          height: 20,
        },
      }}>
      <Tab.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{
          tabBarLabel: '首页',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <IconShouye size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Listen"
        component={Listen}
        options={{
          tabBarLabel: '我听',
          tabBarIcon: ({color, size}) => (
            <IconShoucang size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Found"
        component={Found}
        options={{
          tabBarLabel: '发现',
          tabBarIcon: ({color, size}) => (
            <IconFaxian size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: '我的',
          tabBarIcon: ({color, size}) => <IconUser size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
