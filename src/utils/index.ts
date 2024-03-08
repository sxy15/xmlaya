import {Dimensions} from 'react-native';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

export {viewportHeight, viewportWidth};

export const wp = (percentage: number) => {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
};

export const hp = (percentage: number) => {
  const value = (percentage * viewportHeight) / 100;
  return Math.round(value);
};
