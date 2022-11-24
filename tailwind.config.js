/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Nunito:'Nunito'
      },
      colors: {
        primary:'#545DFF',
        secondary:"#7A7A7A",
        dark:"#212121"
      }
    },
  },
  plugins: [],
}
