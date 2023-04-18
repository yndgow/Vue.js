<template>
  <h4>Grids</h4>
  <v-container>
    <h4>그리드 기본</h4>
    <v-row no-gutters>
      <v-col cols="12" class="border text-center bg-indigo">12</v-col>
      <v-col cols="6" class="border text-center mt-4">6</v-col>
      <v-col cols="6" class="border text-center mt-4">6</v-col>
      <v-col cols="4" class="border text-center mt-4">4</v-col>
      <v-col cols="4" class="border text-center mt-4">4</v-col>
      <v-col cols="4" class="border text-center mt-4">4</v-col>
      <v-col cols="5" class="border text-center mt-4">5</v-col>
      <v-col cols="5" class="border text-center mt-4">5</v-col>
      <v-col cols="2" class="border text-center mt-4">2</v-col>

      <v-col
        v-for="n in 12"
        :key="n"
        cols="1"
        xs="1"
        sm="2"
        md="3"
        lg="4"
        xl="12"
        class="border text-center mt-4"
        >1</v-col
      >
    </v-row>
  </v-container>
  <h4>반응형 레이아웃</h4>
  <v-container fluid>
    <v-row no-gutters="">
      <v-col cols="12" md="6" lg="3" class="border bg-purple text-center"
        >column1</v-col
      >
      <v-col cols="12" md="6" lg="3" class="border bg-purple text-center"
        >column1</v-col
      >
      <v-col cols="12" md="6" lg="3" class="border bg-purple text-center"
        >column1</v-col
      >
      <v-col cols="12" md="6" lg="3" class="border bg-purple text-center"
        >column1</v-col
      >
    </v-row>
  </v-container>
</template>
<script setup></script>
<style scoped></style>
