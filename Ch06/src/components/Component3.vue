<template>
  <h4>Component3</h4>

  <p>Vuex count : {{ store.state.count }}</p>
  <input type="number" v-model="count1" />
  <button @click="btnInit">초기화</button>
</template>
<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const count1 = ref(0);

const btnInit = function () {
  store.dispatch('initCount', { count1: count1 });
};
</script>

<style scoped></style>
