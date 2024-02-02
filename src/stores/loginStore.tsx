import { create } from "zustand";

export const useLogin = create((set) => ({
  isLogin: false,
  doLogin: () => set({isLogin: true}),
  doLogout: () => set({isLogin: false}),
}));
