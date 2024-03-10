import React, {useState} from 'react';
import {StyleSheet, Platform} from 'react-native';
import {TabBar, TabView} from 'react-native-tab-view';
import Intro from './Intro';
import List from './List';

function Tab() {
  const [index, setIndex] = useState(1);

  const handleIndexChange = idx => {
    setIndex(idx);
  };

  return (
    <TabView
      navigationState={{
        routes: [
          {key: 'introduction', title: '简介'},
          {key: 'albums', title: '节目'},
        ],
        index,
      }}
      onIndexChange={handleIndexChange}
      renderScene={({route}) => {
        return route.key === 'introduction' ? <Intro /> : <List />;
      }}
      renderTabBar={props => (
        <TabBar
          {...props}
          style={styles.tabBar}
          tabStyle={styles.tab}
          labelStyle={styles.label}
          indicatorStyle={styles.indicator}
          scrollEnabled={true}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  tab: {
    width: 80,
  },
  label: {
    color: '#333',
  },
  tabBar: {
    backgroundColor: '#fff',
    ...Platform.select({
      android: {
        elevation: 0,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#e3e3e3',
      },
    }),
  },
  indicator: {
    backgroundColor: '#eb6d48',
    borderColor: '#fff',
    borderLeftWidth: 15,
    borderRightWidth: 15,
  },
});

export default Tab;
