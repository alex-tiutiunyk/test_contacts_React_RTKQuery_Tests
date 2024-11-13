import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/test_contacts_React_RTKQuery_Tests',
  plugins: [react()],
})
