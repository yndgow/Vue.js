// Vuex 전역스토어
import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: null,
  },
  mutations: {
    SET_USER: function (state, data) {
      state.user = data;
    },
  },
  actions: {
    setUser: function (context, data) {
      context.commit('SET_USER', data);
    },
  },
  getters: {
    getUser: function (state) {
      return state.user;
    },
  },
});

// 스토어 내보내기
export default store;
