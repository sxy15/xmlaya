import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';
import {useRoute} from '@react-navigation/native';
import {BlurView} from '@react-native-community/blur';
const coverRight = require('@/assets/images/cover-right.png');

function Header() {
  const headerHeight = useHeaderHeight();
  const route = useRoute();
  const item = route.params.item;

  return (
    <View>
      <View style={{...styles.header, paddingTop: headerHeight}}>
        <Image source={item.image} style={styles.image} />
        <BlurView
          style={StyleSheet.absoluteFillObject}
          blurType="light"
          blurAmount={20}
        />
        <View style={styles.imageView}>
          <Image source={item.image} style={styles.thumbnail} />
          <Image
            source={coverRight}
            style={styles.coverRight}
            resizeMode="contain"
          />
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>
          <View style={styles.summary}>
            <Text style={styles.summaryText} numberOfLines={1}>
              {item.title.slice(0, 4)}
            </Text>
          </View>
          <View style={styles.author}>
            <Image source={item.image} style={styles.avatar} />
            <Text style={styles.name}>{item.name}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 260,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    overflow: 'hidden',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#eee',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    height: 260,
    backgroundColor: '#eee',
  },
  headerRight: {
    flex: 1,
  },
  coverRight: {
    height: 98,
    position: 'absolute',
    right: -23,
  },
  tab: {
    backgroundColor: '#fff',
  },
  imageView: {
    marginRight: 26,
    alignItems: 'center',
    flexDirection: 'row',
  },
  thumbnail: {
    height: 98,
    width: 98,
    borderColor: '#fff',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: '900',
    color: '#fff',
  },
  summary: {
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 10,
    marginVertical: 10,
    borderRadius: 4,
  },
  summaryText: {
    color: '#fff',
    fontSize: 12,
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    borderRadius: 13,
    height: 26,
    width: 26,
    marginRight: 8,
  },
  name: {
    color: '#fff',
    fontSize: 12,
  },
});

export default Header;
