<template>
  <h4>JWT 실습하기</h4>

  <router-view></router-view>
</template>
<script setup>
import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();

onBeforeMount(() => {
  console.log('App onBeforeMount!!!');
  const accessToken = localStorage.getItem('accessToken');
  store
    .dispatch('authUser', accessToken)
    .then((response) => {
      router.push('/jwt/loginSuccess');
    })
    .catch((error) => {
      router.push('/jwt/loginForm');
    });
});
</script>
<style scoped></style>
