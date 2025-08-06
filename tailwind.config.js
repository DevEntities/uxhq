/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // screens: {
      //   // ✅ Your custom breakpoint between md and lg
      //   mxl: '1280px',
      //   'max-mxl': { max: '1279px' },
      //   'min-mxl': '1280px',
      //   // ✅ Default Tailwind breakpoints (included explicitly)
      //   sm: '640px',
      //   md: '768px',
      //   lg: '1024px',
      //   xl: '1280px',
      //   '2xl': '1536px',

      //   // ✅ Max-width variants (for shrinking)
      //   'max-sm': { max: '639px' },
      //   'max-md': { max: '767px' },
      //   'max-lg': { max: '1023px' },
      //   'max-xl': { max: '1279px' },
      //   'max-2xl': { max: '1535px' },

      //   // ✅ Min-width variants (semantic clarity)
      //   'min-sm': '640px',
      //   'min-md': '768px',
      //   'min-lg': '1024px',
      //   'min-xl': '1280px',
      //   'min-2xl': '1536px',


      // },
      colors: {
        'test': '#3b82f6',
        'UXHQ-green': '#14FF14',
        'UXHQ-white': '#F3F3F3',
        'UXHQ-black': '#242424'
      },
      backgroundImage: {
        // 'dots': 'radial-gradient(rgba(0,0,0,0.192) 0.09em, transparent 0.1em)',
      },
      backgroundSize: {
        'dots': '0.7em 0.7em',
      },
      fontFamily: {
        juana: ['MyCustomFont'],
        dmsans: ['MyCustomFont2'],
        dmsansemibold: ['MyCustomFont2'],
      },
    },
  },
  plugins: [],
}

