/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconVolumeOff = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M704 240l0 544q0 13-9.5 22.5t-22.5 9.5-22.5-9.5l-166.5-166.5-131 0q-13 0-22.5-9.5t-9.5-22.5l0-192q0-13 9.5-22.5t22.5-9.5l131 0 166.5-166.5q9.5-9.5 22.5-9.5t22.5 9.5 9.5 22.5z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconVolumeOff.defaultProps = {
  size: 18,
};

IconVolumeOff = React.memo ? React.memo(IconVolumeOff) : IconVolumeOff;

export default IconVolumeOff;
