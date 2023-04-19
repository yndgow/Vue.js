<template>
  <h4>User2 수정</h4>
  <form @submit.prevent="modifyUser(user)">
    <table border="1">
      <tr>
        <th>아이디</th>
        <td><input type="text" v-model="user.uid" readonly /></td>
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
        <td colspan="2" align="right"><button type="submit">수정</button></td>
      </tr>
    </table>
  </form>
</template>
<script setup>
import axios from 'axios';
import { onBeforeMount, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const router = useRouter();
const store = useStore();

const user = reactive({
  uid: '',
  name: '',
  hp: '',
  age: 0,
});
const modifyUser = (user) => {
  axios
    .put(`/Ch09/user2/${user.uid}`, user)
    .then((res) => {
      alert('Modify Success!!');
      router.push('/user2');
    })
    .catch((err) => {
      console.log(err.message);
    });
};

onBeforeMount(() => {
  Object.assign(user, store.getters.getUser);

  const uid = localStorage.getItem('uid');
  console.log(uid);
  console.log(user);
  if (uid && !user.value) {
    axios
      .get(`/Ch09/user2/${uid}`)
      .then((res) => {
        console.log('데이터 불러오기');
        Object.assign(user, res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
});
</script>
<style scoped></style>
