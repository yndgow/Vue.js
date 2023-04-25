<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>로그인</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container grid-list-xs>
        <v-card class="mx-auto mt-16" max-width="400">
          <v-card-item>
            <v-card-title primary-title> 로그인 </v-card-title>
          </v-card-item>
          <v-card-text>
            <v-container grid-list-xs>
              <v-row>
                <v-col cols="8">
                  <v-text-field
                    label="아이디"
                    prepend-icon="mdi-account"
                    variant="underlined"
                    hide-details="auto"
                  ></v-text-field>
                  <v-text-field
                    label="비밀번호"
                    prepend-icon="mdi-lock"
                    variant="underlined"
                    hide-details="true"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-btn block height="100%" color="primary" @click="btnLogin"
                    >로그인</v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="btnRegister">회원가입</v-btn>
          </v-card-actions>
        </v-card>
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
const btnRegister = () => {
  route.push("/user/terms");
};
const btnLogin = () => {
  route.push("/list");
};
</script>
<style scoped></style>
