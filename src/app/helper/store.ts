import { create } from "zustand";

interface storeTypes {
  showBurger: boolean
  setShowBurger: (data: boolean) => void
}

export const useGlobalStore = create<storeTypes>((set, get) => ({
  showBurger: false,
  setShowBurger: (data: boolean) => {
    set({
      showBurger: data,
    });
  },
}));
