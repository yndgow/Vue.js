<template>
  <li>{{ city }}</li>
</template>
<script>
export default {
  name: 'UComponent2',
  // 상위 컴포넌트에서 전달하는 상태값을 수신하는 API
  props: ['city'],
};
</script>
<style scoped></style>
