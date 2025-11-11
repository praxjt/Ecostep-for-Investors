import { create } from "zustand";

export const useUserStore = create((set) => ({
  address: "..",
  accesstoken: null,
   role: null,  

  setAddress: (address) => set({ address: address }),
   setaccesstoken: (token) => set({ token }),
  setRole: (role) => set({ role }),


}));
