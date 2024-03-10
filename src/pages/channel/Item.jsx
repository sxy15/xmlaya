import {IconShengyin, IconV} from '@assets/iconfont';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function Item({item, index}) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.item}
      onPress={this.onPress}>
      <View style={styles.left}>
        <Text style={styles.serial}>{index + 1}</Text>
      </View>
      <View style={styles.centerView}>
        <Text style={styles.title}>{item.name}</Text>
        <View style={styles.centerRight}>
          <View style={styles.volumeView}>
            <IconV color="#939393" />
            <Text style={styles.otherText}>{item.count}</Text>
          </View>
          <View style={styles.duration}>
            <IconShengyin color="#939393" />
            <Text style={styles.otherText}>{item.count + 2}</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.date}>2024-11-03</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#dedede',
  },
  left: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  serial: {
    color: '#838383',
    fontWeight: '800',
  },
  title: {
    fontWeight: '500',
    color: '#333',
    marginBottom: 15,
  },
  centerView: {
    flex: 1,
    marginHorizontal: 25,
  },
  centerRight: {
    flexDirection: 'row',
  },
  volumeView: {
    flexDirection: 'row',
    marginRight: 10,
  },
  duration: {flexDirection: 'row'},
  otherText: {
    marginHorizontal: 5,
    color: '#939393',
    fontWeight: '100',
  },
  date: {
    color: '#939393',
    fontWeight: '100',
  },
});

export default Item;
