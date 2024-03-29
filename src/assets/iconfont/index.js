/* eslint-disable */

import React from 'react';

import IconLoading from './IconLoading';
import IconVolumeUp from './IconVolumeUp';
import IconFavoritesFill from './IconFavoritesFill';
import IconVolumeOff from './IconVolumeOff';
import IconPause from './IconPause';
import IconPlayArrow from './IconPlayArrow';
import IconFullscreen from './IconFullscreen';
import IconLijitingke from './IconLijitingke';
import IconBofang3 from './IconBofang3';
import IconPaste from './IconPaste';
import IconShangyishou from './IconShangyishou';
import IconXiayishou from './IconXiayishou';
import IconDown from './IconDown';
import IconBack from './IconBack';
import IconHuanyipi from './IconHuanyipi';
import IconXihuan from './IconXihuan';
import IconMore from './IconMore';
import IconShengyin from './IconShengyin';
import IconV from './IconV';
import IconUser from './IconUser';
import IconBofang from './IconBofang';
import IconPlay2 from './IconPlay2';
import IconTime from './IconTime';
import IconMessage from './IconMessage';
import IconBofang1 from './IconBofang1';
import IconBofang2 from './IconBofang2';
import IconFaxian from './IconFaxian';
import IconShijian from './IconShijian';
import IconShouye from './IconShouye';
import IconShoucang from './IconShoucang';
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

let IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-loading':
      return <IconLoading key="1" {...rest} />;
    case 'icon-volume-up':
      return <IconVolumeUp key="2" {...rest} />;
    case 'icon-favorites-fill':
      return <IconFavoritesFill key="3" {...rest} />;
    case 'icon-volume-off':
      return <IconVolumeOff key="4" {...rest} />;
    case 'icon-pause':
      return <IconPause key="5" {...rest} />;
    case 'icon-play-arrow':
      return <IconPlayArrow key="6" {...rest} />;
    case 'icon-fullscreen':
      return <IconFullscreen key="7" {...rest} />;
    case 'icon-lijitingke':
      return <IconLijitingke key="8" {...rest} />;
    case 'icon-bofang3':
      return <IconBofang3 key="9" {...rest} />;
    case 'icon-paste':
      return <IconPaste key="10" {...rest} />;
    case 'icon-shangyishou':
      return <IconShangyishou key="11" {...rest} />;
    case 'icon-xiayishou':
      return <IconXiayishou key="12" {...rest} />;
    case 'icon-down':
      return <IconDown key="13" {...rest} />;
    case 'icon-back':
      return <IconBack key="14" {...rest} />;
    case 'icon-huanyipi':
      return <IconHuanyipi key="15" {...rest} />;
    case 'icon-xihuan':
      return <IconXihuan key="16" {...rest} />;
    case 'icon-more':
      return <IconMore key="17" {...rest} />;
    case 'icon-shengyin':
      return <IconShengyin key="18" {...rest} />;
    case 'icon-V':
      return <IconV key="19" {...rest} />;
    case 'icon-user':
      return <IconUser key="20" {...rest} />;
    case 'icon-bofang':
      return <IconBofang key="21" {...rest} />;
    case 'icon-play2':
      return <IconPlay2 key="22" {...rest} />;
    case 'icon-time':
      return <IconTime key="23" {...rest} />;
    case 'icon-message':
      return <IconMessage key="24" {...rest} />;
    case 'icon-bofang1':
      return <IconBofang1 key="25" {...rest} />;
    case 'icon-bofang2':
      return <IconBofang2 key="26" {...rest} />;
    case 'icon-faxian':
      return <IconFaxian key="27" {...rest} />;
    case 'icon-shijian':
      return <IconShijian key="28" {...rest} />;
    case 'icon-shouye':
      return <IconShouye key="29" {...rest} />;
    case 'icon-shoucang':
      return <IconShoucang key="30" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
