<template>
  <router-view></router-view>
</template>

<script setup>
import { onBeforeMount } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useAppStore } from "./store/app";
const router = useRouter();
onBeforeMount(() => {
  const accessToken = localStorage.getItem("accessToken");
  const userStore = useAppStore();

  // 로그인 상태라면
  if (accessToken) {
    axios
      .get("http://localhost:8184/api/user/auth", {
        headers: { "X-AUTH-TOKEN": accessToken },
      })
      .then((res) => {
        userStore.setUser(res.data.user);
      })
      .catch((err) => {
        alert(err.message);
      });
  } else {
    router.push("/user/login");
  }
});
</script>
