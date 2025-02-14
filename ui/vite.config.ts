import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'AI Summarizer',
        short_name: 'Summarizer',
        description: 'A PWA for text summarization using Generative AI',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg,ico}']
      }
    })
  ],
  server: {
    host: true, // Allows external access
    port: 5173, // Ensure it matches your ngrok port
    strictPort: true,
    allowedHosts: ["d02b-45-112-241-246.ngrok-free.app"] // Add your ngrok host
  }
});
