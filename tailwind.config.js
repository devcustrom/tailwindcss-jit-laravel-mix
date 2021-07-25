module.exports = {
  mode: 'jit',
  purge: [
    '*/*/*.js',
    '*/*.htm',
    '*/*/*.htm',
    '*/*/*/*.htm',
    '*/*/*/*/*.htm',
  ],
  darkMode: 'media',
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
