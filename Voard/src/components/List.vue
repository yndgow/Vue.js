<template>
  <v-app>
    <v-main>
      <v-app-bar app>
        <v-app-bar-title>글목록</v-app-bar-title>
      </v-app-bar>
      <v-container>
        <v-sheet max-width="800" class="mx-auto mt-16">
          <v-table class="text-center" density="compact">
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
              <tr>
                <td>1</td>
                <td class="text-left" @click="moveView">제목입니다.</td>
                <td>길동이</td>
                <td>12</td>
                <td>23-04-25</td>
              </tr>
              <tr>
                <td>2</td>
                <td>제목입니다.</td>
                <td>길동이</td>
                <td>12</td>
                <td>23-04-25</td>
              </tr>
              <tr>
                <td>3</td>
                <td>제목입니다.</td>
                <td>길동이</td>
                <td>12</td>
                <td>23-04-25</td>
              </tr>
              <tr>
                <td>4</td>
                <td>제목입니다.</td>
                <td>길동이</td>
                <td>12</td>
                <td>23-04-25</td>
              </tr>
              <tr>
                <td>5</td>
                <td>제목입니다.</td>
                <td>길동이</td>
                <td>12</td>
                <td>23-04-25</td>
              </tr>
            </tbody>
          </v-table>
          <v-sheet class="text-end mt-6">
            <v-btn color="indigo" @click="btnWrite">글쓰기</v-btn>
          </v-sheet>
          <v-pagination
            :length="100"
            v-model="page"
            total-visible="5"
            rounded="circle"
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
import { useRouter } from "vue-router";

const router = useRouter();

const btnWrite = () => {
  router.push("/write");
};

const moveView = () => {
  router.push("/view");
};
</script>
<style scoped></style>
