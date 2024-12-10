import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.PNG'],

  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
})