<template>
  <h4>User1 수정</h4>
  <form @submit.prevent="user1Modify">
    <table border="1">
      <tr>
        <td>아이디</td>
        <td><input type="text" v-model="user.uid" readonly /></td>
      </tr>
      <tr>
        <td>이름</td>
        <td><input type="text" v-model="user.name" /></td>
      </tr>
      <tr>
        <td>휴대폰</td>
        <td><input type="text" v-model="user.hp" /></td>
      </tr>
      <tr>
        <td>나이</td>
        <td><input type="number" v-model="user.age" /></td>
      </tr>
      <tr>
        <td colspan="2" align="right"><input type="submit" value="등록" /></td>
      </tr>
    </table>
  </form>
</template>
<script setup>
import axios from 'axios';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

// 라우터
const router = useRouter();

// params 받기 user
const props = defineProps({
  uid: String,
  name: String,
  hp: String,
  age: Number,
});

const user = reactive({
  uid: props.uid,
  name: props.name,
  hp: props.hp,
  age: props.age,
});

// 수정
const user1Modify = () => {
  axios
    .put('/Ch09/user1', user)
    .then((res) => {
      alert('수정완료!');
      router.push('/user1/list');
    })
    .catch((err) => {
      alert('Error updating user information: ' + err.message);
    });
};
</script>
<style scoped></style>
