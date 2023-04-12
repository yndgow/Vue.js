<template>
  <h4>Rest API 실습하기</h4>
  <table border="1">
    <tr>
      <th>아이디</th>
      <th>비밀번호</th>
      <th>이름</th>
      <th>휴대폰</th>
      <th>나이</th>
    </tr>
    <tr v-for="user in users">
      <td>{{ user.uid }}</td>
      <td>{{ user.pass }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.hp }}</td>
      <td>{{ user.age }}</td>
    </tr>
  </table>

  <h4>Get 파라미터 전송예제</h4>
  <input type="text" v-model="inputText" />
  <button v-on:click="getUser1">User 요청</button>
  <p>
    아이디 : {{ user.uid }}<br />
    이름 : {{ user.name }}<br />
    휴대폰 : {{ user.hp }}<br />
    나이 : {{ user.age }}<br />
  </p>

  <h4>Post 예제</h4>
  <form v-on:submit.prevent="postUser">
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
        <th>휴대폰</th>
        <td><input type="text" v-model="user.hp" /></td>
      </tr>
      <tr>
        <th>나이</th>
        <td><input type="text" v-model="user.age" /></td>
      </tr>
      <tr>
        <td colspan="2" align="right">
          <input type="submit" value="저장" />
        </td>
      </tr>
    </table>
  </form>

  <h4>Put 예제</h4>
  <form v-on:submit.prevent="putUser">
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
        <th>휴대폰</th>
        <td><input type="text" v-model="user.hp" /></td>
      </tr>
      <tr>
        <th>나이</th>
        <td><input type="text" v-model="user.age" /></td>
      </tr>
      <tr>
        <td colspan="2" align="right">
          <input type="submit" value="저장" />
        </td>
      </tr>
    </table>
  </form>

  <h4>Delete 파라미터 전송예제</h4>
  <input type="text" v-model="inputText" />
  <button v-on:click="deleteUser">삭제</button>
</template>
<script setup>
import axios from 'axios';
import { onBeforeMount, reactive, ref, toRefs } from 'vue';

const users = ref([]);
const inputText = ref('');
const user = reactive({ uid: '', name: '', hp: '', age: 0 });

onBeforeMount(() => {
  const url = 'http://localhost:8080/Ch09/user1s';
  axios({
    url: url,
    method: 'get',
    responseType: 'json',
  })
    .then((res) => {
      console.log(res.data);
      // user = res.data;
      users.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
});

const getUser1 = () => {
  const url = `http://localhost:8080/Ch09/user1/${inputText.value}`;
  //const jsonData = { uid: inputText.value };
  axios
    .get(url)
    .then((res) => {
      console.log(res.data);
      // user = res.data;
      Object.assign(user, toRefs(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

function postUser() {
  const url = 'http://localhost:8080/Ch09/user1';
  const jsonData = { uid: user.uid, name: user.name, hp: user.hp, age: user.age };
  axios
    .post(url, jsonData)
    .then((res) => {
      alert('등록완료');
      console.log(res);
      users.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

function putUser() {
  const url = 'http://localhost:8080/Ch09/user1';
  const jsonData = { uid: user.uid, name: user.name, hp: user.hp, age: user.age };
  axios
    .put(url, jsonData)
    .then((res) => {
      alert('수정완료');
      users.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

const deleteUser = () => {
  const url = `http://localhost:8080/Ch09/user1/${inputText.value}`;

  axios
    .delete(url)
    .then((res) => {
      alert('삭제완료');
      console.log(res);
      users.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>
<style scoped></style>
