// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    user: {},
  }),
  actions: () => ({
    setUser() {},
  }),
  getters: () => ({
    getUser(state) {
      return state.user;
    },
  }),
});
