import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // if you're using React
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/dashboard/', // ✅ this must match your Render subpath
  plugins: [
    react(),            // ✅ optional but common for React apps
    tailwindcss(),
  ],
})
