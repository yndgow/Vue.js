<template>
  <h4>Parents</h4>
  <p>부모 컴포넌트</p>
  <Child></Child>
</template>
<script>
import Child from './Child.vue';

export default {
  name: 'Parents',
  components: { Child },
};
</script>
<style lang="css" scoped></style>
