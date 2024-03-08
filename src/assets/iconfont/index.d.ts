/* eslint-disable */

import { FunctionComponent } from 'react';
// Don't forget to install package: @types/react-native
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';

export { default as IconLoading } from './IconLoading';
export { default as IconVolumeUp } from './IconVolumeUp';
export { default as IconFavoritesFill } from './IconFavoritesFill';
export { default as IconVolumeOff } from './IconVolumeOff';
export { default as IconPause } from './IconPause';
export { default as IconPlayArrow } from './IconPlayArrow';
export { default as IconFullscreen } from './IconFullscreen';
export { default as IconLijitingke } from './IconLijitingke';
export { default as IconBofang3 } from './IconBofang3';
export { default as IconPaste } from './IconPaste';
export { default as IconShangyishou } from './IconShangyishou';
export { default as IconXiayishou } from './IconXiayishou';
export { default as IconDown } from './IconDown';
export { default as IconBack } from './IconBack';
export { default as IconHuanyipi } from './IconHuanyipi';
export { default as IconXihuan } from './IconXihuan';
export { default as IconMore } from './IconMore';
export { default as IconShengyin } from './IconShengyin';
export { default as IconV } from './IconV';
export { default as IconUser } from './IconUser';
export { default as IconBofang } from './IconBofang';
export { default as IconPlay2 } from './IconPlay2';
export { default as IconTime } from './IconTime';
export { default as IconMessage } from './IconMessage';
export { default as IconBofang1 } from './IconBofang1';
export { default as IconBofang2 } from './IconBofang2';
export { default as IconFaxian } from './IconFaxian';
export { default as IconShijian } from './IconShijian';
export { default as IconShouye } from './IconShouye';
export { default as IconShoucang } from './IconShoucang';

interface Props extends GProps, ViewProps {
  name: 'icon-loading' | 'icon-volume-up' | 'icon-favorites-fill' | 'icon-volume-off' | 'icon-pause' | 'icon-play-arrow' | 'icon-fullscreen' | 'icon-lijitingke' | 'icon-bofang3' | 'icon-paste' | 'icon-shangyishou' | 'icon-xiayishou' | 'icon-down' | 'icon-back' | 'icon-huanyipi' | 'icon-xihuan' | 'icon-more' | 'icon-shengyin' | 'icon-V' | 'icon-user' | 'icon-bofang' | 'icon-play2' | 'icon-time' | 'icon-message' | 'icon-bofang1' | 'icon-bofang2' | 'icon-faxian' | 'icon-shijian' | 'icon-shouye' | 'icon-shoucang';
  size?: number;
  color?: string | string[];
}

declare const IconFont: FunctionComponent<Props>;

export default IconFont;
