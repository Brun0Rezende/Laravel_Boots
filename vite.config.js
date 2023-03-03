import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
             'resources/css/app.css',
             'resources/js/app.js',
             'node_module/bootstrap/dist/css/bootstrap.min.css',
             'node_module/bootstrap/dist/js/bootstrap.bundle.js'
            ],
            refresh: true,
        }),
    ],
});
