import {create} from 'zustand';
import {CarouselData} from '@/mock/carousel';
import {GuessData} from '@/mock/guess';
import {ChannelData} from '@/mock/channel';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const useStore = create(set => ({
  carouselList: CarouselData,
  carouseIndex: 0,
  gradientVisible: true,
  guessList: GuessData.slice(0, 6),
  channelList: ChannelData,
  setGradientVisible: visible => {
    set(() => ({
      gradientVisible: visible,
    }));
  },
  changeGuessList: () => {
    set(state => ({
      guessList: state.guessList.sort(() => Math.random() - 0.5).slice(0, 6),
    }));
  },
  changeChannelList: async () => {
    await sleep(1000);
    set(state => ({
      channelList: state.channelList.concat(ChannelData),
    }));
  },
  changeCarouseIndex: index => {
    set(() => ({
      carouseIndex: index,
    }));
  },
  refresh: async () => {
    await sleep(1000);
    set(() => ({
      channelList: ChannelData,
      guessList: GuessData.slice(0, 6),
    }));
  },
}));

export default useStore;
