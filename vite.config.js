import { defineConfig } from 'vite';
import commonjs from 'vite-plugin-commonjs';
import nodePolyfills from 'rollup-plugin-node-polyfills';

import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';

export default defineConfig({
    plugins: [commonjs()],
    optimizeDeps: {
        define: {
            global: 'globalThis',
        },
        plugins: [
            NodeGlobalsPolyfillPlugin({
                process: true,
                buffer: true,
            }),
        ],
    },
    build: {
        outDir: 'dist',
        sourcemap: true,
        minify: true,
        lib: {
            entry: './src/connect-client.js',
            formats: ['umd'],
            name: 'Woody',
            fileName: 'connect-client',
        },
        rollupOptions: {
            plugins: [nodePolyfills()],
        },
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            https: 'https-browserify',
            http: 'stream-http',
        },
    },
});
