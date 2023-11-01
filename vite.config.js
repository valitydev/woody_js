import { defineConfig } from 'vite';
import commonjs from 'vite-plugin-commonjs';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';

export default defineConfig({
    plugins: [
        commonjs(),
        NodeGlobalsPolyfillPlugin({
            process: true,
            buffer: true,
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
        rollupOptions: {
            external: ['process'],
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
