<template>
  <li v-for="(todo, index) in todos">
    <i class="fa-solid fa-check" @click="btnCheck(todo.no, index)"></i>
    {{ todo.content }} / {{ todo.status }}
    <button @click="btnDelete(index, todo.no)">삭제</button>
  </li>
</template>
<script setup>
import { computed } from 'vue';
import { useTodoStore } from '../store/TodoStore';

// 스토어 불러오기
const todoStore = useTodoStore();
// todos 불러오기
const todos = computed(() => todoStore.getTodos);

const btnDelete = (index, no) => {
  todoStore.removeTodo(index, no);
};

const btnCheck = (no, index) => {
  alert('no : ' + no + 'index' + index);
};
</script>
<style scoped></style>
