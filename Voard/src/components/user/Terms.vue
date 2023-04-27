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
            v-model="data.terms"
            readonly
            rows="10"
          ></v-textarea>
          <v-checkbox
            label="동의합니다."
            color="indigo"
            value="indigo"
            class="d-flex justify-end"
            v-model="data.isCheck1"
          ></v-checkbox>
          <v-textarea
            label="개인정보 취급방침"
            variant="outlined"
            hide-details="true"
            v-model="data.privacy"
            readonly
            rows="10"
          ></v-textarea>
          <v-checkbox
            label="동의합니다"
            color="indigo"
            value="indigo"
            class="d-flex justify-end"
            v-model="data.isCheck2"
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
import axios from "axios";
import { reactive } from "vue";
import { onBeforeMount } from "vue";
import { useRouter } from "vue-router";

const route = useRouter();

const data = reactive({
  terms: null,
  privacy: null,
  isCheck1: false,
  isCheck2: false,
});
const btnLogin = function () {
  route.push("/user/login");
};

const btnNext = () => {
  if (data.isCheck1 && data.isCheck2) {
    route.push("/user/register");
  } else {
    alert("모두 동의하셔야 합니다.");
  }
};

onBeforeMount(() => {
  axios
    .get("/Voard/user/terms")
    .then((res) => {
      console.log(res);
      data.terms = res.data[0].terms;
      data.privacy = res.data[0].privacy;
    })
    .catch((err) => {
      alert(err.message);
    });
});
</script>
<style scoped></style>
