<template>
  <h3>Ch03.Component 실습</h3>
  <h4>1&#41;컴포넌트 기본</h4>
  <Component1></Component1>
  <Component2></Component2>
  <Parents></Parents>
  <hr />

  <h4>2&#41; 컴포넌트 Option API</h4>
  <MyComponent1></MyComponent1>
  <MyComponent2></MyComponent2>
  <MyComponent3></MyComponent3>
  <MyComponent4></MyComponent4>

  <h4>3&#41; 컴포넌트 통신(데이터 교환)</h4>
  <UComponent1 :name="name"></UComponent1>
  <UComponent1 :name="name" :age="age"></UComponent1>
  <ul>
    <UComponent2 v-for="city in cities" :city="city"></UComponent2>
  </ul>
  <UComponent3 :c3Name="name" :c3Age="age"></UComponent3>
  <UComponent5 v-on:myShow="printValue"></UComponent5>
  <p v-if="value1 && value2">
    이름 : {{ value1 }} <br />
    나이 : {{ value2 }}
  </p>
  <h4>4&#41; 컴포넌트 생명주기</h4>
  <hr />
</template>

<script>
/*
  날짜 : 2023/04/05
  이름 : 김지홍
  내용 : Ch03.컴포넌트

  Component
    - 화면 구성요소를독립적인 모듈형태로 구성하기 위한 요소
    - SFC 구조(template, script, style)를 이용한 컴포넌트 구성
    - 주요 구성요소로 Options API를 이용한 컴포넌트 기능 구현

*/
import Component1 from './components/Component1.vue';
import Component2 from './components/Component2.vue';
import Parents from './components/sub/Parents.vue';
import MyComponent1 from './components/sub2/MyComponent1.vue';
import MyComponent2 from './components/sub2/MyComponent2.vue';
import MyComponent3 from './components/sub2/MyComponent3.vue';
import MyComponent4 from './components/sub2/MyComponent4.vue';
import UComponent3 from './components/sub3/UComponent3.vue';
import UComponent5 from './components/sub3/UComponent5.vue';
import UComponent1 from './components/sub3/uComponent1.vue';
import UComponent2 from './components/sub3/uComponent2.vue';

export default {
  name: 'App',
  components: { Component1, Component2, Parents, MyComponent1, MyComponent2, MyComponent3, MyComponent4, UComponent1, UComponent2, UComponent3, UComponent5 },
  data() {
    return {
      name: '홍길동',
      age: 21,
      cities: ['서울', '대전', '대구', '부산', '광주', '제주'],
      value1: '',
      value2: 0,
    };
  },
  methods: {
    printValue: function (data) {
      this.value1 = data.name;
      this.value2 = data.age;
    },
  },
};
</script>
