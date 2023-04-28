<template>
  <v-app>
    <v-main>
      <v-app-bar>
        <v-app-bar-title>글쓰기</v-app-bar-title>
      </v-app-bar>
      <v-container>
        <v-sheet max-width="800" class="mx-auto mt-16">
          <v-row>
            <v-col cols="12">
              <v-text-field
                name=""
                label="제목"
                id=""
                v-model="article.title"
              ></v-text-field>
              <v-file-input
                label="파일 첨부"
                variant="underlined"
              ></v-file-input>
              <v-textarea
                label="내용"
                rows="19"
                no-resize
                auto-grow=""
                v-model="article.content"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-sheet class="text-end mt-6">
            <v-btn color="error" @click="btnCancle">취소</v-btn>
            <v-btn color="indigo" @click="btnWrite" class="ml-4">등록</v-btn>
          </v-sheet>
        </v-sheet>
        <v-dialog v-model="dialog" width="auto">
          <v-card>
            <v-toolbar color="primary" title="알림"> </v-toolbar>
            <v-card-text> 작성글이 정상적으로 등록되었습니다. </v-card-text>
            <v-card-actions>
              <v-btn color="primary" block @click="btnCancle">확인</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-main>
    <v-footer class="bg-indigo-lighten-1"> copyright &copy;Voard v1.0</v-footer>
  </v-app>
</template>
<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { useAppStore } from "@/store/app";
import { ref } from "vue";
const router = useRouter();
const userStore = useAppStore();
const user = userStore.getUser;
const dialog = ref(false);

const article = reactive({
  title: "",
  content: "",
  uid: user.uid,
});

const btnWrite = () => {
  const url = "http://localhost:8184/api/write";
  axios
    .post(url, article)
    .then((res) => {
      if (res.data > 0) {
        dialog.value = true;
      }
    })
    .catch((err) => {
      alert(err.message);
    });
};

const btnCancle = () => {
  router.push("/list");
};
</script>
<style scoped></style>
