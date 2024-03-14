import {create} from 'zustand';

const useStore = create(set => ({
  favBooks: [],
  addToFavBooks: book =>
    set(state => ({
      favBooks: [...state.favBooks, book],
    })),
}));

export default useStore;
