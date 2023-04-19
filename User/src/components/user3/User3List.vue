<template>
  <h4>User3 목록</h4>
  <table border="1">
    <tr>
      <th>아이디</th>
      <th>이름</th>
      <th>전화번호</th>
      <th>나이</th>
      <th>관리</th>
    </tr>
    <tr v-for="user in userStore.users">
      <td>{{ user.uid }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.hp }}</td>
      <td>{{ user.age }}</td>
      <td>
        <a href="/user3/modify" @click.prevent="modForm(user)">수정</a> /
        <a href="/user3/delete" @click.prevent="delUser(user.uid)">삭제</a>
      </td>
    </tr>
  </table>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { useUserStore } from '../../store/UserStore';

const userStore = useUserStore();
const router = useRouter();
userStore.fill();

const modForm = function (user) {
  userStore.setUser(user);
  router.push('/user3/modify');
};

const delUser = (uid) => {
  userStore.deleteUser(uid);
};
</script>
<style scoped></style>
