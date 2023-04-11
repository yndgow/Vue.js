<template>
  <h3>Ch06.Vuex 실습</h3>

  <p>Vuex message : {{ message }}</p>
  <table border="1">
    <tr>
      <th>번호</th>
      <th>내용</th>
      <th>완료</th>
    </tr>
    <tr v-for="item in todos">
      <td>{{ item.no }}</td>
      <td>{{ item.text }}</td>
      <td>{{ item.done }}</td>
    </tr>
  </table>

  <p>Vuex count : {{ store.state.count }}</p>
  <button @click="btnIncrement">증가</button>

  <Component1></Component1>
  <Component3></Component3>
</template>
<script setup>
import { useStore } from 'vuex';
import Component1 from './components/Component1.vue';
import Component3 from './components/Component3.vue';

const store = useStore();
const message = store.getters.getMessage;
const todos = store.getters.getTodos;

const btnIncrement = function () {
  store.dispatch('increment');
};
</script>

<style scoped></style>
