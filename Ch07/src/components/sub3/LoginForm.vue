<template>
  <h4>JWT 로그인</h4>
  <form @submit.prevent="loginProc">
    <table border="1">
      <tr>
        <td>아이디</td>
        <td><input type="text" v-model="user.uid" /></td>
      </tr>
      <tr>
        <td>비밀번호</td>
        <td><input type="password" v-model="user.pass" /></td>
      </tr>
      <tr>
        <td colspan="2" align="right"><input type="submit" value="로그인" /></td>
      </tr>
    </table>
  </form>
</template>
<script setup>
import { reactive } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

const user = reactive({
  uid: '',
  pass: '',
});

const loginProc = function () {
  axios
    .post('/Voard/user/login', user)
    .then((response) => {
      console.log(response);
      const token = response.data.accessToken;
      localStorage.setItem('accessToken', token);
      router.push('/jwt/loginSuccess');
    })
    .catch((error) => {
      const statusCode = error.response.status;
      console.log(statusCode);
      if (statusCode == 403) {
        alert('아이디와 비밀번호가 일치하지 않습니다.');
      }
      console.log(error);
    });
};
</script>
<style scoped></style>
