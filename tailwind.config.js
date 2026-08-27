/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
    './app/error.vue'
  ],
  theme: {
    extend: {
      colors: {
        spaBg: '#fff5f7',
        spaPinkLight: '#fff0f3',
        spaCardBg: '#ffffff',
        spaPrimary: '#e91e63',
        spaDark: '#4a2832',
        spaDeepRed: '#c2185b',
        spaAccentPink: '#f8bbd0',
        spaGold: '#b78103'
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        luxury: ['Playfair Display', 'serif']
      }
    }
  },
  plugins: []
}
