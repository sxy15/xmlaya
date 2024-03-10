import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Header from './Header';
import Tab from './Tab';

function Channel() {
  return (
    <View style={styles.container}>
      <Header />
      <Tab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Channel;
