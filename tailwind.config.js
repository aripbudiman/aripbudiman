/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        blueTitmouse:'#4b69fd',
        chineseGoldfish:'#f24822',
        whiteSmoke:'#f5f5f5',
        washedBlack:'#212529',
        incandescence:'#fcbd22',
        clearBlue:'#277cfd',
        reptilianGreen:'#0a9e80'
      },
      fontFamily:{
        'satisfy': ['Satisfy', 'Arial', 'sans-serif'],
        'hammersmith': ['Hammersmith One', 'Arial', 'sans-serif'],
        sans: ['Poppins', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

