<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>약관</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container grid-list-xs>
        <v-sheet max-width="800" class="mx-auto mt-16">
          <v-textarea
            label="이용약관"
            variant="outlined"
            hide-details="true"
          ></v-textarea>
          <v-checkbox
            label="동의합니다."
            color="indigo"
            value="indigo"
            class="d-flex justify-end"
          ></v-checkbox>
          <v-textarea
            label="개인정보 취급방침"
            variant="outlined"
            hide-details="true"
          ></v-textarea>
          <v-checkbox
            label="동의합니다"
            color="indigo"
            value="indigo"
            class="d-flex justify-end"
          ></v-checkbox>
        </v-sheet>
        <v-sheet class="text-center">
          <v-btn color="error" class="mr-4" @click="btnLogin">취소</v-btn>
          <v-btn color="indigo" @click="btnNext">다음</v-btn>
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

const route = useRouter();

const btnLogin = function () {
  route.push("/user/login");
};

const btnNext = () => {
  route.push("/user/register");
};
</script>
<style scoped></style>
