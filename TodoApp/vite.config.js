import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/todo': {
        target: 'http://localhost:8383',
        changeOrigin: true,
      },
    },
  },
});
