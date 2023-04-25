import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/todo': {
        target: 'http://13.125.215.198:8383',
        changeOrigin: true,
      },
    },
  },
});
