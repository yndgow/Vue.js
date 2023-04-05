<template>
  <h4>MyComponent2 - methods API</h4>
  <button v-on:click="btn1Click(1)">button1</button>
  <button v-on:click="btn2Click(2)">button2</button>
  <button @click="btn3Click(3)">button3</button>
</template>
<script>
export default {
  name: 'MyComponent2',
  // 화면 이벤트 처리와 로직 제어에 관련한 함수를 정의하는 API
  methods: {
    btn1Click(data) {
      alert('button1 click' + data);
    },
    btn2Click: function (data) {
      alert('button2 click' + data);
    },
    btn3Click: (data) => {
      alert('button3 click' + data);
    },
  },
};
</script>
<style scoped></style>
