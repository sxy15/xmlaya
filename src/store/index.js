import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CarouselData} from '@/mock/carousel';
import {GuessData} from '@/mock/guess';
import {ChannelData} from '@/mock/channel';
import {MyIds, OtherIds, CategoryData} from '@/mock/category';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const useStore = create(set => ({
  carouselList: CarouselData,
  carouseIndex: 0,
  gradientVisible: true,
  guessList: GuessData.slice(0, 6),
  channelList: ChannelData,
  myCategory: [],
  otherCategory: OtherIds,
  cacheIds: [],
  initMyCategory: async () => {
    const localCategory = await AsyncStorage.getItem('categoryIds');
    const ids = localCategory ? JSON.parse(localCategory) : MyIds;
    set(() => ({
      myCategory: ids,
      cacheIds: ids,
    }));
  },
  updateCacheIds: (type, id) => {
    set(state => ({
      cacheIds:
        type === 'add'
          ? [...state.cacheIds, id]
          : [...state.cacheIds.filter(it => it !== id)],
    }));
  },
  setCategory() {
    set(async ({cacheIds}) => {
      const myCategory = CategoryData.filter(item =>
        cacheIds.includes(item.id),
      );
      const otherCategory = CategoryData.filter(
        item => !cacheIds.includes(item.id),
      );
      await AsyncStorage.setItem('categoryIds', JSON.stringify(cacheIds));
      return {
        myCategory,
        otherCategory,
      };
    });
  },

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
