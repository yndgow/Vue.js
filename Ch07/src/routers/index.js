/*
    Router 인스턴스 정의
*/

import { createRouter, createWebHistory } from 'vue-router';
import AxiosComponent from '../components/sub1/AxiosComponent.vue';
import RestComponent from '../components/sub2/RestComponent.vue';
import JwtComponent from '../components/sub3/JwtComponent.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/axios', name: '', component: AxiosComponent },
    { path: '/rest', name: '', component: RestComponent },
    { path: '/jwt', name: '', component: JwtComponent },
  ],
});

// router 내보내기 -> main.js 등록
export default router;
