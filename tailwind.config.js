module.exports = {
  mode: 'jit',
  purge: [
    'src/js/*.js',
    './index.html'
  ],
  darkMode: 'media',
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
