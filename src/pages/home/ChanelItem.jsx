import {IconShengyin, IconV} from '@assets/iconfont';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function handlePress(item) {
  alert(item.type);
}

function ChanelItem({item}) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => handlePress(item)}>
      <View style={styles.item}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.rightContainer}>
          <Text style={styles.name} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={styles.type} numberOfLines={1}>
            {item.type}
          </Text>
          <View style={styles.info}>
            <View style={styles.countContainer}>
              <IconV size={12} color={'#6f6f6f'} />
              <Text style={styles.text}>{item.count}</Text>
            </View>
            <View style={styles.numContainer}>
              <IconShengyin size={12} color={'#6f6f6f'} />
              <Text style={styles.text}>{item.count + 1}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: '#dedede',
    marginRight: 10,
  },
  rightContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    marginBottom: 10,
    color: '#111',
  },
  type: {
    fontSize: 12,
    color: '#6f6f6f',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    padding: 3,
    borderRadius: 4,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  countContainer: {
    flexDirection: 'row',
    marginRight: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    color: '#6f6f6f',
    marginLeft: 5,
  },
  numContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ChanelItem;
