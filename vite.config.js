import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Папка для итоговой сборки
    // outDir: 'build',
    // Папка для ассетов внутри outDir
    // assetsDir: 'static',
    // Минификация через terser (чуть медленнее, но гибче)
    minify: 'terser',
    // Целевая версия JS
    target: 'es2017',
    // Вынесение зависимостей в отдельные чанки
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
});
