/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconMore = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M335.985778 767.886222l303.945955-303.945955 48.287289 48.287289-303.968711 303.945955z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M335.780978 255.931733l48.264533-48.241777 303.968711 303.9232-48.287289 48.287288z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconMore.defaultProps = {
  size: 18,
};

IconMore = React.memo ? React.memo(IconMore) : IconMore;

export default IconMore;
