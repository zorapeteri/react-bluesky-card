import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dtsPlugin from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dtsPlugin({
      tsconfigPath: resolve(__dirname, 'tsconfig.app.json'),
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.tsx'),
      name: 'ReactBlueskyCard',
      formats: ['es'],
      // the proper extensions will be added
      fileName: 'react-bluesky-card',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom'],
    },
  },
});
