<template>
  <v-app>
    <v-main>
      <v-app-bar>
        <v-app-bar-title>글쓰기</v-app-bar-title>
      </v-app-bar>
      <v-container>
        <v-sheet max-width="800" class="mx-auto mt-16">
          <v-form>
            <v-row>
              <v-col cols="12">
                <v-text-field name="" label="제목" id=""></v-text-field>
                <v-textarea
                  label="내용"
                  rows="22"
                  no-resize
                  auto-grow=""
                ></v-textarea>
              </v-col>
            </v-row>
          </v-form>
          <v-sheet class="text-end mt-6">
            <v-btn color="indigo" @click="btnSubmit">등록</v-btn>
          </v-sheet>
        </v-sheet>
      </v-container>
    </v-main>
    <v-footer class="bg-indigo-lighten-1"> copyright &copy;Voard v1.0</v-footer>
  </v-app>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const btnSubmit = () => {
  router.push("/list");
};
</script>
<style scoped></style>
