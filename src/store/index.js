import create from "zustand";
import { fetchImages } from "../actions";

const store = create((set) => ({
  images: [],
  loading: false,
  fetchImages: async () => {
    set({ loading: true });
    const response = await fetchImages();
    set({ images: response, loading: false });
  },
}));

export default store;
