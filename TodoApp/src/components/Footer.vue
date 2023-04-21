<template>
  <footer>
    <button @click="btnClear">Clear All</button>
  </footer>
</template>
<script setup>
import { useTodoStore } from '../store/TodoStore';
const todoStore = useTodoStore();

const emit = defineEmits(['clearTodos']);

const btnClear = () => {
  //todoStore.clearTodos();
  emit('clearTodos');
};
</script>
<style scoped>
footer {
  width: 100%;
  height: auto;
  text-align: center;
}
footer > button {
  width: 100px;
  height: 30px;
  color: #e20303;
}
</style>
