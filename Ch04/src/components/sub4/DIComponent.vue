<template>
  <h4>DIComponent</h4>
  <p>
    이름 : {{ user.name }} <br />
    나이 : {{ user.age }} <br />
    주소 : {{ user.addr }} <br />
  </p>
  <DIsubComponent></DIsubComponent>
</template>

<script setup>
import { inject } from 'vue';
import DIsubComponent from './DIsubComponent.vue';

const user = inject('user');
</script>
<style scoped></style>
