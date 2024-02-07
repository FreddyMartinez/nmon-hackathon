import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": {
      NODE_ENV: "production",
    },
  },
  plugins: [react()],

  // 👇 Insert these lines
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "web-components",
      fileName: (format) => `web-components.${format}.js`,
    },
    target: "esnext",
  },
});