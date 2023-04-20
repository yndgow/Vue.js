<template>
  <main>
    <ul>
      <Item></Item>
    </ul>
  </main>
</template>
<script setup>
import Item from './Item.vue';
</script>
<style>
main {
  width: 100%;
  height: auto;
  padding: 10px;
  box-sizing: border-box;
  /* border: 1px solid blue; */
}
main > ul {
  width: 100%;
  height: auto;
  list-style: none;
  padding-left: 0;
  /* border: 1px solid green; */
  box-sizing: border-box;
}
main > ul > li {
  width: 100%;
  height: 40px;
  /* border: 1px solid orange; */
  box-sizing: border-box;
  line-height: 40px;
  padding-left: 6px;
  margin: 6px 0;
  background-color: white;
}
main > ul > li > button {
  float: right;
  width: 40px;
  height: 40px;
  border: none;
  color: #de4343;
}
</style>
