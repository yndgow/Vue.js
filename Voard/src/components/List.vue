<template>
  <v-app>
    <v-main>
      <v-app-bar app>
        <v-app-bar-title>글목록</v-app-bar-title>
        <p>
          {{ user.nick }} 님 반갑습니다.
          <v-btn @click="btnLogout">로그아웃</v-btn>
        </p>
      </v-app-bar>
      <v-container>
        <v-sheet max-width="800" class="mx-auto mt-16">
          <v-table class="text-center" density="compact" hover>
            <thead>
              <tr>
                <th class="text-center">번호</th>
                <th class="text-center">제목</th>
                <th class="text-center">작성자</th>
                <th class="text-center">조회수</th>
                <th class="text-center">작성일</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(article, index) in state.data.articles"
                :key="article.no"
              >
                <td>{{ state.data.pageStartNum - index }}</td>
                <td class="text-left" @click="moveView(article.no)">
                  {{ article.title }}
                </td>
                <td>{{ article.uid }}</td>
                <td>{{ article.hit }}</td>
                <td>{{ article.rdate.substring(2, 10) }}</td>
              </tr>
            </tbody>
          </v-table>
          <v-sheet class="text-end mt-6">
            <v-btn color="indigo" @click="btnWrite">글쓰기</v-btn>
          </v-sheet>
          <v-pagination
            :length="state.data.lastPageNum"
            v-model="page"
            total-visible="10"
            rounded="circle"
            @click="pageHandler"
          ></v-pagination>
        </v-sheet>
      </v-container>
    </v-main>
    <v-footer app class="bg-indigo-lighten-1">
      copyright &copy;Voard v1.0</v-footer
    >
  </v-app>
</template>
<script setup>
import { useAppStore } from "@/store/app";
import axios from "axios";
import { ref } from "vue";
import { reactive } from "vue";
import { onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import { computed } from "vue";
const router = useRouter();
const userStore = useAppStore();
const user = userStore.getUser;
const state = reactive({
  data: {},
});
const page = ref(1);

const btnWrite = () => {
  router.push("/write");
};

const moveView = (no) => {
  userStore.setArticle(no);
  localStorage.setItem("no", no);
  router.push("/view");
};

const btnLogout = () => {
  localStorage.removeItem("accessToken");
  router.push("/user/login");
};

const pageHandler = () => {
  localStorage.setItem("pg", page.value);
  userStore.setPage(page.value);
  getArticles(page.value);
};

const getArticles = (pg) => {
  const localPg = localStorage.getItem("pg");
  const storePg = userStore.getPg;

  if (storePg == 0) {
    pg = localPg;
    page.value = Number(localPg);
  }
  // const url = "http://localhost:8184/api/list?pg=" + pg;
  // axios
  //   .get(url)
  //   .then((res) => {
  //     state.data = res.data;
  //   })
  //   .catch((err) => {
  //     alert(err.message);
  //   });
  userStore.setArticles(pg);
  state.data = computed(() => userStore.getArticles);
};

onBeforeMount(() => {
  getArticles(1);
});
</script>
<style scoped></style>
