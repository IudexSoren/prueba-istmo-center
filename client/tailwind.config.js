module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 10px 10px #92004F',
      }
    }
  },
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  variants: {
    extend: {
      borderWidth: ['last'],
      padding: ['last']
    },
  },
  plugins: [],
}
