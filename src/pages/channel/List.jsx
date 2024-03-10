import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import Item from './Item';
import {ChannelData} from '@/mock/channel';

function List() {
  return (
    <FlatList
      renderItem={({item, index}) => <Item item={item} index={index} />}
      data={ChannelData}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default List;
