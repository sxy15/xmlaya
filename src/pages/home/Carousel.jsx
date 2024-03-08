import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Carousel, {ParallaxImage, Pagination} from 'react-native-snap-carousel';
import {hp, viewportWidth, wp} from '@utils/index';
import useStore from '@/store';

const sliderWidth = viewportWidth;
const slideWidth = wp(90);
const slideHeight = hp(20);
const itemWidth = slideWidth + wp(2) * 2;

function Dots({activeSlide, len}) {
  return (
    <View style={styles.paginationWrapper}>
      <Pagination
        containerStyle={styles.paginationContainer}
        dotContainerStyle={styles.dotContainer}
        activeDotIndex={activeSlide}
        dotStyle={styles.dot}
        inactiveDotScale={0.7}
        inactiveDotOpacity={0.4}
        dotsLength={len}
      />
    </View>
  );
}

function Carrousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const data = useStore(state => state.carouselList);

  const handleSnapToItem = index => {
    setActiveSlide(index);
  };

  return (
    <View>
      <Carousel
        data={data}
        renderItem={({item}, parallaxProps) => (
          <ParallaxImage
            source={item}
            style={styles.image}
            parallaxFactor={0.4}
            spinnerColor="rgba(0, 0, 0, 0.25)"
            containerStyle={styles.imageContainer}
            {...parallaxProps}
          />
        )}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        onSnapToItem={handleSnapToItem}
        hasParallaxImages
        loop
        autoplay
      />
      <Dots activeSlide={activeSlide} len={data.length} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: itemWidth,
    height: slideHeight,
    borderRadius: 8,
  },
  image: {
    width: itemWidth,
    height: slideHeight,
    resizeMode: 'cover',
  },
  paginationWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 6,
    paddingHorizontal: 2,
    paddingVertical: 3,
    backgroundColor: 'rgba(0,0,0, 0.25)',
    borderRadius: 8,
  },
  dotContainer: {
    marginHorizontal: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255, 0.7)',
  },
});

export default Carrousel;
