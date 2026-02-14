import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or your specific framework

export default defineConfig({
  plugins: [react()],
  base: '/6-assig/', // REPLACE 'my-repo-name' with your actual GitHub repo name
})
///////