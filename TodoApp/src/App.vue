<template>
  <Header v-on:addTodo="addTodoHandler"></Header>
  <Main></Main>
  <Footer v-on:clearTodos="clearTodosHandler"></Footer>
</template>
<script setup>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import { useTodoStore } from './store/TodoStore';
import { onBeforeMount } from 'vue';

const todoStore = useTodoStore();

const addTodoHandler = (value) => {
  todoStore.addTodo(value);
};
const clearTodosHandler = () => {
  todoStore.clearTodos();
};
onBeforeMount(() => {
  todoStore.setTodos();
});
</script>
<style scoped></style>
