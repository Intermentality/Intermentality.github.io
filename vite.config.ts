import { defineConfig } from 'vite'
import path from 'path';

import react from '@vitejs/plugin-react'
import glsl from 'vite-plugin-glsl'

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [react(), glsl()],

  assetsInclude: ["**/*.GLSL", "assets/*", "**/*.PNG"],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      components: `${path.resolve(__dirname, "./src/Components/")}`,
      public: `${path.resolve(__dirname, "./public/")}`,
      assets: `${path.resolve(__dirname, './src/assets/')}`,
      pages: path.resolve(__dirname, "./src/Pages/")
    },
  },
})