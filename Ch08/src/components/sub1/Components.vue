<template>
  <h4>Components</h4>
  <div>
    <h4>Icons</h4>
    <v-icon color="success" icon="mdi-alert"></v-icon>
    <v-icon icon="mdi-cat"></v-icon>
    <svg-icon type="mdi" :path="path"></svg-icon>
    <v-divider class="my-5"></v-divider>
    <h4>Images</h4>
    <v-img
      :width="300"
      aspect-ratio="16/9"
      cover
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    ></v-img>
    <v-img
      :width="300"
      aspect-ratio="16/9"
      cover
      src="https://cdn.pixabay.com/photo/2023/03/30/05/45/bird-7886820_960_720.jpg"
    ></v-img>

    <v-divider class="my-5"></v-divider>

    <h4>Buttons</h4>
    <v-btn> Button </v-btn>
    <v-btn color="primary"> Button </v-btn>
    <v-btn color="secondary"> Button </v-btn>
    <v-btn color="purple"> Button </v-btn>
    <v-btn color="deep-purple-lighten-2"> Button </v-btn>
    <v-btn prepend-icon="mdi-vuetify"> Button </v-btn>
    <v-btn variant="tonal"> Button </v-btn>
    <v-btn block=""> Button </v-btn>
    <v-divider class="my-5"></v-divider>

    <h4>Cards</h4>
    <v-card text="내용입니다."></v-card>
    <v-card
      class="my-5"
      loading
      title="제목입니다."
      subtitle="부제목입니다."
      text="내용입니다."
      variant="outlined"
    >
      <v-card-actions>
        <v-btn>확인</v-btn>
      </v-card-actions>
    </v-card>
    <v-card class="w-25" variant="outlined">
      <v-img
        height="200"
        src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
        cover
        class="text-white"
      >
        <v-card-title> 제목입니다. </v-card-title>
        <v-card-subtitle>부제목입니다.</v-card-subtitle>
      </v-img>
      <v-card-text> 내용입니다. </v-card-text>
      <v-card-actions>
        <v-btn>확인</v-btn>
      </v-card-actions>
    </v-card>
    <hr />
  </div>
</template>
<script setup>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiSharkFinOutline } from "@mdi/js";

const path = mdiSharkFinOutline;
</script>
<style scoped></style>
