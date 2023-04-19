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
    saveUser(user) {
      axios.post('/Ch09/user3', user).then(() => {
        alert('SAVE OK!!');
      });
    },
    updateUser(user) {
      axios.put(`/Ch09/user3/${user.uid}`, user).then((res) => {
        alert('UPDATE OK!!');
      });
    },
    deleteUser(uid) {
      axios.delete(`/Ch09/user3/${uid}`).then((res) => {
        this.users = res.data;
        alert('DELETE OK!!');
      });
    },
  },
  getters: {
    getUser: (state) => state.user,
  },
});
