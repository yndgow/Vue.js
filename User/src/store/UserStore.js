import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('UserStore', {
  state: () => ({
    users: [],
    user: {},
  }),
  actions: {
    async fill() {
      this.users = (await axios.get('/Ch09/user3')).data;
    },
    setUser(user) {
      this.user = user;
    },
    async saveUser(user) {
      await axios.post('/Ch09/user3', user).then(() => {
        alert('SAVE OK!!');
      });
    },
    async updateUser(user) {
      await axios.put(`/Ch09/user3/${user.uid}`, user).then((res) => {
        alert('UPDATE OK!!');
      });
    },
    async deleteUser(uid) {
      await axios.delete(`/Ch09/user3/${uid}`).then((res) => {
        this.users = res.data;
        alert('DELETE OK!!');
      });
    },
  },
  getters: {
    getUser: (state) => state.user,
  },
  persist: true,
});
