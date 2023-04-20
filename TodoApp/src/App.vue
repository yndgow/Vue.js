<template>
  <Header v-on:addTodo="addTodoHandler"></Header>
  <Main></Main>
  <Footer></Footer>
</template>
<script setup>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import { useStore } from 'vuex';

const store = useStore();
const addTodoHandler = (value) => {
  store.dispatch('addTodo', value);
};
</script>
<style scoped></style>
