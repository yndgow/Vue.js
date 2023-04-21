<template>
  <Header v-on:addTodo="addTodoHandler"></Header>
  <Main></Main>
  <Footer v-on:clearTodos="clearTodosHandler"></Footer>
</template>
<script setup>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import { useStore } from 'vuex';
import { useTodoStore } from './store/TodoStore';

const todoStore = useTodoStore();

const store = useStore();
const addTodoHandler = (value) => {
  //store.dispatch('addTodo', value);
  todoStore.addTodo(value);
};
const clearTodosHandler = () => {
  todoStore.clearTodos();
};
</script>
<style scoped></style>
