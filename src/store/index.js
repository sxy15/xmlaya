import {create} from 'zustand';
import {CarouselData} from '@/mock/carousel';

const useStore = create(set => ({
  carouselList: CarouselData,
}));

export default useStore;
