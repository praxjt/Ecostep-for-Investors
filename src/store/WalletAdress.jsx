import { create } from "zustand";

export const useUserStore = create((set) => ({
  address: "..",
  setAddress: (addr) => set({ address: addr }),
}));
