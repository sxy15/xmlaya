import React, {useEffect, useState} from 'react';
import Carousel, {slideHeight} from './Carousel';
import Guess from './Guess';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import ChanelItem from './ChanelItem';

import useStore from '@/store';

function ListHead() {
  return (
    <View>
      <Carousel />
      <View style={style.guess}>
        <Guess />
      </View>
    </View>
  );
}

function ListFooter({loading, end}) {
  return (
    <View style={style.footer}>
      <Text>{loading ? '加载中...' : end ? '到底了～' : ''}</Text>
    </View>
  );
}

function Home() {
  const [loading, setLoading] = useState(false);
  const [end, setEnd] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const setGradientVisible = useStore(state => state.setGradientVisible);
  const gradientVisible = useStore(state => state.gradientVisible);
  const refresh = useStore(state => state.refresh);
  const channelList = useStore(state => state.channelList);
  const changeChannelList = useStore(state => state.changeChannelList);

  const handleRefresh = async () => {
    setRefreshing(true);
    await refresh();
    setRefreshing(false);
    setEnd(false);
  };

  const handleEndReached = async () => {
    if (loading || end) {
      return;
    }
    setLoading(true);
    await changeChannelList();
    setLoading(false);
  };

  const handleScroll = ({nativeEvent}) => {
    const newGradientVisible = slideHeight > nativeEvent.contentOffset.y;
    if (newGradientVisible !== gradientVisible) {
      setGradientVisible(newGradientVisible);
    }
  };

  useEffect(() => {
    if (channelList.length >= 18) {
      setEnd(true);
    }
  }, [channelList]);

  return (
    <FlatList
      ListHeaderComponent={ListHead}
      ListFooterComponent={() => ListFooter({loading, end})}
      data={channelList}
      renderItem={ChanelItem}
      style={style.list}
      keyExtractor={item => `${item.id}${Math.random()}`}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.1}
      onRefresh={handleRefresh}
      refreshing={refreshing}
      onScroll={handleScroll}
    />
  );
}

const style = StyleSheet.create({
  list: {
    backgroundColor: 'rgba(0, 0, 0, .08)',
  },
  guess: {
    backgroundColor: 'white',
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
});

export default Home;
