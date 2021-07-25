
const path = require('path');
const mix = require('laravel-mix');
const mix2 = require('laravel-mix');

const arJsPage = [
    'src/js/app.js',
];

mix.webpackConfig({
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules')
        ]
    }
});

arJsPage.forEach(sJsPage => {
    mix.js(sJsPage, 'dist/js');
});

if (mix.inProduction()) {
    mix.postCss('src/css/index.css', 'dist/css/style.css', [
        require('postcss-import'),
        require('tailwindcss'),
        require('postcss-gap-properties'),
        require('autoprefixer'),
    ])
} else {
    mix.postCss('src/css/index.css', 'src/css/style.css')
}

mix.disableNotifications();
