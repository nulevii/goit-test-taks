/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        'hr-shadow': '0px 4px 4px rgba(0, 0, 0, 0.06), inset 0px -2px 4px #AE7BE3, inset 0px 4px 3px #FBF8FF;',
        'btn-shadow': '0px 4px 4px rgba(0, 0, 0, 0.25)'
      },
      backgroundImage: {
        ellips: "url('/src/assets/images/ellipse.png')"
      },
      fontFamily: { sans: ['Montserrat', 'sans-serif'] }
    },
    plugins: []
  }
}
