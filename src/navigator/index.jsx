import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  HeaderStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import Detail from '@pages/Detail';
import {Platform, StatusBar} from 'react-native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {HEAD_TITLE} from '@constants/index';

const RootStack = createStackNavigator();

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  return HEAD_TITLE[routeName] || '首页';
}

function Navigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerMode: 'float',
          headerTitleAlign: 'center',
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerStatusBarHeight: StatusBar.currentHeight,
          headerStyle: {
            backgroundColor: '#f4511e',
            ...Platform.select({
              android: {
                elevation: 0,
                borderBottomWidth: 1,
                borderBottomColor: '#f0f0f0',
              },
            }),
          },
        }}>
        <RootStack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={({route}) => {
            const title = getHeaderTitle(route);
            return {
              headerTitle: title,
              headerShown: title === '首页' ? false : true,
            };
          }}
        />
        <RootStack.Screen name="Detail" component={Detail} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
