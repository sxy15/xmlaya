import {create} from 'zustand';
import {CarouselData} from '@/mock/carousel';
import {GuessData} from '@/mock/guess';

const useStore = create(set => ({
  carouselList: CarouselData,
  guessList: GuessData.slice(0, 6),
  changeGuessList: () => {
    set(state => ({
      guessList: state.guessList.sort(() => Math.random() - 0.5).slice(0, 6),
    }));
  },
}));

export default useStore;
