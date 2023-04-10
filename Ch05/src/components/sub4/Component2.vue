<template>
  <h4>Component1</h4>
  <p>
    user : {{ $route.params }}<br />
    name : {{ $route.params.name }}<br />
    age : {{ $route.params.age }}<br />
    addr : {{ $route.params.addr }}<br />
  </p>
</template>
<script setup></script>
<style scoped></style>
