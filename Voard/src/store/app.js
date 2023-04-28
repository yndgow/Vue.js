// Utilities
import axios from "axios";
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    user: {},
    articles: [],
    page: 0,
    no: 0,
  }),
  actions: {
    setUser(user) {
      this.user = user;
    },
    setPage(pg) {
      this.page = pg;
    },
    setNo(no) {
      this.page = no;
    },
    setArticles(pg) {
      const url = "http://localhost:8184/api/list?pg=" + pg;
      axios
        .get(url)
        .then((res) => {
          this.articles = res.data;
        })
        .catch((err) => {
          alert(err.message);
        });
    },
  },
  getters: {
    getUser() {
      return this.user;
    },
    getPg() {
      return this.page;
    },
    getNo() {
      return this.no;
    },
    getArticles() {
      return this.articles;
    },
  },
});
