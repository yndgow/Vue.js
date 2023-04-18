<template>
  <h4>User1 목록</h4>
  <table border="1">
    <tr>
      <th>아이디</th>
      <th>이름</th>
      <th>휴대폰</th>
      <th>나이</th>
      <th>관리</th>
    </tr>
    <tr v-for="user in users">
      <td>{{ user.uid }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.hp }}</td>
      <td>{{ user.age }}</td>
      <td>
        <a href="#" @click.prevent="modifyUser(user)">수정</a> /
        <a href="#" @click.prevent="deleteUser(user.uid)">삭제</a>
      </td>
    </tr>
  </table>
</template>
<script setup>
import axios from 'axios';
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';

// 유저 리스트 받기
const users = ref([]);

// 라우터
const route = useRouter();

// 수정 페이지로(유저 정보를 가지고) 라우터에서 props true
const modifyUser = (user) => {
  route.push({
    name: 'User1Modify',
    params: user,
  });
};

// 삭제
const deleteUser = function (uid) {
  const result = confirm('삭제?');
  if (!result) {
    return;
  }

  axios
    .delete(`/Ch09/user1/${uid}`)
    .then((res) => {
      users.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

// 유저 목록(페이지 로딩시 출력)
onBeforeMount(() => {
  axios
    .get('/Ch09/user1s')
    .then((res) => {
      users.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>
<style scoped></style>
