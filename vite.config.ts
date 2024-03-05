import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  server: {
    fs: {
      cachedChecks: false,
    },
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: [
      {
        find: '@/',
        replacement: fileURLToPath(new URL('./src/', import.meta.url)),
      },
      {
        find: '@assets/',
        replacement: fileURLToPath(new URL('./src/assets/', import.meta.url)),
      },
      {
        find: '@models/',
        replacement: fileURLToPath(
          new URL('./src/core/models/', import.meta.url),
        ),
      },
      {
        find: 'dialogs/',
        replacement: fileURLToPath(
          new URL('./src/ui/dialogs/', import.meta.url),
        ),
      },
      {
        find: '@common/',
        replacement: fileURLToPath(
          new URL('./src/ui/common/', import.meta.url),
        ),
      },
      {
        find: '@baseTypes/',
        replacement: fileURLToPath(
          new URL('./src/ui/baseTypes/', import.meta.url),
        ),
      },
      {
        find: '@pages/',
        replacement: fileURLToPath(new URL('./ui/pages/', import.meta.url)),
      },
      {
        find: '@store/',
        replacement: fileURLToPath(
          new URL('./src/core/store/', import.meta.url),
        ),
      },
    ],
  },
})
