<template>
  <li v-for="(todo, index) in todos">
    <i class="fa-solid fa-check"></i>
    {{ todo }}
    <button @click="btnDelete(index)">삭제</button>
  </li>
</template>
<script setup>
import { computed } from 'vue';
import { useTodoStore } from '../store/TodoStore';

// 스토어 불러오기
const todoStore = useTodoStore();
// todos 불러오기
const todos = computed(() => todoStore.getTodos);

const btnDelete = (index) => {
  todoStore.removeTodo(index);
};
</script>
<style scoped></style>
