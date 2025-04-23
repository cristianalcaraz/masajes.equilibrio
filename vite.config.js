import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: 'https://cristianalcaraz.github.io/masajes.equilibrio',
  plugins: [react()],
})
