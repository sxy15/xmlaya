import React from 'react';
import Carousel from './Carousel';
import Guess from './Guess';
import {ScrollView} from 'react-native';

function Home({navigation}) {
  return (
    <ScrollView style={{backgroundColor: 'rgba(0, 0, 0, .08)'}}>
      <Carousel />
      <Guess />
    </ScrollView>
  );
}

export default Home;
