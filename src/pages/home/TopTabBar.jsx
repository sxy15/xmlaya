import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native';
import {MaterialTopTabBar} from '@react-navigation/material-top-tabs';
import LinearGradientTransition from 'react-native-linear-animated-gradient-transition';
import useStore from '@/store';
import {CarouselColors} from '@/mock/carousel';

function goHistory() {}

function TopTabBar(props) {
  const carouseIndex = useStore(state => state.carouseIndex);
  const gradientVisible = useStore(state => state.gradientVisible);

  const textStyle = gradientVisible ? styles.text : styles.blackText;

  return (
    <View style={styles.container}>
      <LinearGradientTransition
        colors={[
          'transparent',
          gradientVisible ? CarouselColors[carouseIndex] : 'transparent',
        ]}
        style={styles.gradient}
      />
      <View style={styles.topView}>
        <MaterialTopTabBar {...props} style={styles.tab} />
        <TouchableOpacity style={styles.categoryBtn}>
          <Text>分类</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchBar}>
        <TouchableOpacity style={styles.search}>
          <Text style={textStyle}>搜索</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.history} onPress={goHistory}>
          <Text style={textStyle}>历史记录</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    elevation: 0,
  },
  tab: {
    overflow: 'hidden',
  },
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryBtn: {
    borderLeftWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 10,
    borderLeftColor: '#ccc',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    height: 280,
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 7,
    paddingHorizontal: 15,
  },
  search: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 12,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  history: {
    marginLeft: 24,
  },
  sortBtn: {
    paddingHorizontal: 8,
    borderLeftColor: '#eee',
    borderLeftWidth: StyleSheet.hairlineWidth,
  },
  text: {
    color: '#363636',
  },
  blackText: {
    color: '#222',
  },
  grayBackgroundColor: {
    backgroundColor: '#333',
  },
  whiteBackgroundColor: {
    backgroundColor: '#fff',
  },
});

export default TopTabBar;
