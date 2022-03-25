module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '340px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage:{
        'hero-img':'url("./components/assets/travel.jpg")',
        'pricing-bg': 'url("./components/assets/pbg.jpg")',
        'info': 'url("./components/assets/info.jpg")',
        'hotel1': 'url("./components/assets/hotel1.jpg")',
        'hotel2': 'url("./components/assets/hotel2.jpg")',
        'hotel3': 'url("./components/assets/hotel3.jpg")',
        'hotel4': 'url("./components/assets/hotel4.jpg")'
      },
      zIndex: {
        '10000':'10000'
      }
    },
  },
  variants: {
    display: ['children', 'default', 'children-first', 'children-last', 'children-odd', 'children-even', 'children-not-first', 'children-not-last', 'children-hover', 'hover', 'children-focus', 'focus', 'children-focus-within', 'focus-within', 'children-active', 'active', 'children-visited', 'visited', 'children-disabled', 'disabled', 'responsive'],
  },
  plugins: [require('tailwindcss-children'),],
}
