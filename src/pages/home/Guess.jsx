import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import useStore from '@/store';
import {IconHuanyipi, IconMore, IconXihuan} from '@assets/iconfont';

function GuessItem({item}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.item}
      onPress={() => alert('点击')}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name} numberOfLines={2}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
}

function Guess() {
  const guessList = useStore(state => state.guessList);
  const changeGuessList = useStore(state => state.changeGuessList);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <IconXihuan size={16} color={'#333'} />
          <Text style={styles.headerTitle}>猜你喜欢</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.moreText}>更多</Text>
          <IconMore size={16} color={'#6f6f6f'} />
        </View>
      </View>
      <FlatList
        style={styles.list}
        numColumns={3}
        data={guessList}
        renderItem={GuessItem}
      />
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.change}
        onPress={changeGuessList}>
        <IconHuanyipi size={14} color={'#6f6f6f'} />
        <Text style={styles.changeText}>换一批</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 16,
  },
  item: {
    flex: 1,
    marginVertical: 6,
    marginHorizontal: 10,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 6,
  },
  name: {
    textAlign: 'left',
    fontSize: 12,
    color: '#111',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomColor: '#cfcfcf',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    marginLeft: 5,
    color: '#333',
  },
  moreText: {
    color: '#6f6f6f',
  },
  list: {
    padding: 10,
  },
  change: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  changeText: {
    color: '#6f6f6f',
    marginLeft: 5,
  },
});

export default Guess;
