import { create } from "zustand";

export const useUserStore = create((set) => ({
  address: "..",
  token: null,
   role: null,  

  setAddress: (addr) => set({ address: addr }),
   setToken: (token) => set({ token }),
  setRole: (role) => set({ role }),

}));
