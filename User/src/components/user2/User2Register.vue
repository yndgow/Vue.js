<template>
  <h4>User2 등록</h4>
  <form @submit.prevent="registerUser">
    <table border="1">
      <tr>
        <th>아이디</th>
        <td><input type="text" v-model="user.uid" /></td>
      </tr>
      <tr>
        <th>이름</th>
        <td><input type="text" v-model="user.name" /></td>
      </tr>
      <tr>
        <th>전화번호</th>
        <td><input type="text" v-model="user.hp" /></td>
      </tr>
      <tr>
        <th>나이</th>
        <td><input type="number" v-model="user.age" /></td>
      </tr>
      <tr>
        <td colspan="2" align="right"><button type="submit">등록</button></td>
      </tr>
    </table>
  </form>
</template>
<script setup>
import axios from 'axios';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const user = reactive({
  uid: '',
  name: '',
  hp: '',
  age: 0,
});

const registerUser = () => {
  axios
    .post('/Ch09/user2', user)
    .then((res) => {
      alert('Register Success!!');
      router.push('/user2');
    })
    .catch((err) => {
      console.log(err.message);
    });
};
</script>
<style scoped></style>
