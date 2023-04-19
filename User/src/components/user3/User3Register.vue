<template>
  <h4>User3 등록</h4>
  <form>
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
        <td><input type="text" v-model="user.age" /></td>
      </tr>
      <tr>
        <td colspan="2" align="right"><button type="button" @click="saveUser">등록</button></td>
      </tr>
    </table>
  </form>
</template>
<script setup>
import { reactive } from 'vue';
import { useUserStore } from '../../store/UserStore';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();

const user = reactive({
  uid: '',
  name: '',
  hp: '',
  age: 0,
});

const saveUser = () => {
  userStore.saveUser(user);
  router.push('/user3/list');
};
</script>
<style scoped></style>
