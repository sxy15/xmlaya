import React from 'react';
import {NavigationContainer, useRoute} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  HeaderStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import {Animated, Platform, StatusBar, StyleSheet} from 'react-native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {HEAD_TITLE} from '@constants/index';
import Category from '@pages/category';
import Channel from '@pages/channel';

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
        <RootStack.Screen
          name="Category"
          component={Category}
          options={{headerTitle: '分类'}}
        />
        <RootStack.Screen
          name="Channel"
          component={Channel}
          options={({route}) => {
            return {
              headerTitle: route.params.title,
              headerTransparent: true,
              headerTitleStyle: {
                opacity: 0,
              },
              headerBackground: () => (
                <Animated.View style={styles.headerBackground} />
              ),
            };
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
    backgroundColor: '#fff',
    opacity: 0,
  },
});

export default Navigator;
