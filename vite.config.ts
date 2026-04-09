/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // @ts-expect-error - vitest plugin typing conflict
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    chunkSizeWarningLimit: 3000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('thirdweb')) {
              return 'vendor-thirdweb'
            }
            if (id.includes('react')) {
              return 'vendor-react'
            }
            if (id.includes('ethers')) {
              return 'vendor-ethers'
            }
            if (id.includes('framer-motion')) {
              return 'vendor-framer-motion'
            }
            if (id.includes('lucide-react')) {
              return 'vendor-lucide'
            }
            return 'vendor'
          }
        }
      }
    }
  }
})
