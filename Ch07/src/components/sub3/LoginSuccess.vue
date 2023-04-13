<template>
  <h4>JWT 로그인 성공</h4>
  <a href="#" @click.prevent="logout">로그아웃</a>
</template>
<script setup>
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

const logout = () => {
  localStorage.removeItem('accessToken');
  //axios.get({}).then().catch()
  router.push('/jwt/loginForm');
};
</script>
<style scoped></style>
