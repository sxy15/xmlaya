import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

function Intro() {
  const route = useRoute();

  return (
    <View>
      <Text style={styles.intro}>{route.params.item.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  intro: {
    fontSize: 14,
    color: '#333',
    padding: 6,
  },
});

export default Intro;
