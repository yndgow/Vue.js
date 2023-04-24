<template>
  <footer>
    <button @click="btnClear">Clear All</button>
  </footer>
</template>
<script setup>
const emit = defineEmits(['clearTodos']);

const btnClear = () => {
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
