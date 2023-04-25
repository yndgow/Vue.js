<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>회원가입</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container grid-list-xs>
        <v-sheet max-width="800" class="mx-auto mt-16">
          <v-card title="사이트 이용정보 입력">
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="6"
                    ><v-text-field
                      label="아이디 입력"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="6">
                    <v-btn color="indigo">중복확인</v-btn>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      label="비밀번호 입력"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                      type="password"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6"></v-col>
                  <v-col cols="6">
                    <v-text-field
                      label="비밀번호 확인"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                      type="password"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6"></v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
          <v-card title="개인정보 입력">
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      label="이름 입력"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6"
                    ><v-text-field
                      label="별명 입력"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="6"><v-btn color="indigo">중복확인</v-btn></v-col>
                </v-row>
                <v-row>
                  <v-col cols="6"
                    ><v-text-field
                      label="이메일 입력"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                      type="email"
                    ></v-text-field
                  ></v-col>
                </v-row>
                <v-row>
                  <v-col cols="6"
                    ><v-text-field
                      label="휴대폰 입력"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                    ></v-text-field
                  ></v-col>
                </v-row>
                <v-row>
                  <v-col cols="4"
                    ><v-text-field
                      label="우편번호 검색"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="2"
                    ><v-btn color="indigo" block>검색</v-btn></v-col
                  >
                </v-row>
                <v-row>
                  <v-col cols="8"
                    ><v-text-field
                      label="기본주소 검색"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="4"><v-btn color="indigo">검색</v-btn></v-col>
                </v-row>
                <v-row>
                  <v-col cols="8"
                    ><v-text-field
                      label="상세주소 입력"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                    ></v-text-field
                  ></v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-sheet>
        <v-sheet max-width="800" class="mx-auto mt-4 text-center">
          <v-btn color="error" @click="btnPrev">취소</v-btn>
          <v-btn color="indigo" class="ml-4" @click="btnRegister">등록</v-btn>
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

const btnPrev = () => {
  route.push("/user/login");
};
const btnRegister = () => {
  route.push("/list");
};
</script>
<style scoped></style>
