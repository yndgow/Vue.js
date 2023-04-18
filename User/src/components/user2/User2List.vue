<template>
  <h4>User2 목록</h4>
  <table border="1">
    <tr>
      <th>아이디</th>
      <th>이름</th>
      <th>휴대폰</th>
      <th>나이</th>
      <th>가입일</th>
      <th>관리</th>
    </tr>
    <tr v-for="user in users">
      <td>{{ user.uid }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.hp }}</td>
      <td>{{ user.age }}</td>
      <td>{{ user.rdate.substring(2, 10) }}</td>
      <td>
        <a href="/user2/modify" @click.prevent="modifyUser(user)">수정</a> /
        <a href="/user2/delete" @click.prevent="deleteUser(user.uid)">삭제</a>
      </td>
    </tr>
  </table>
</template>
<script setup>
import axios from 'axios';
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const users = ref([]);
const router = useRouter();
const store = useStore();

const modifyUser = (user) => {
  store.dispatch('setUser', user);
  localStorage.setItem('uid', user.uid);
  router.push('/user2/modify');
};

const deleteUser = (uid) => {
  axios
    .delete(`/Ch09/user2/${uid}`)
    .then((res) => {
      alert('Delete Success!!');
      users.value = res.data;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

onBeforeMount(() => {
  axios
    .get('/Ch09/user2')
    .then((res) => {
      users.value = res.data;
    })
    .catch((err) => {
      console.log(err.message);
    });
});
</script>
<style scoped></style>
