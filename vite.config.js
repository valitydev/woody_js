import { defineConfig } from 'vite';
import commonjs from 'vite-plugin-commonjs';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
    plugins: [
        commonjs(),
        nodePolyfills({
            globals: {
                Buffer: true,
                process: true,
            },
        }),
    ],
    build: {
        outDir: 'dist',
        sourcemap: true,
        minify: true,
        lib: {
            entry: './src/connect-client.js',
            formats: ['es'],
            fileName: 'connect-client',
        },
    },
    resolve: {
        extensions: ['.js'],
    },
});
